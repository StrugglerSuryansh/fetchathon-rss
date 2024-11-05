import hashlib
import json

import requests
from typing import Optional, Union, List, Dict
from pydantic import BaseModel

from fetchai.crypto import Identity


DEFAULT_AGENTVERSE_URL = "https://agentverse.ai"
DEFAULT_ALMANAC_API_URL = DEFAULT_AGENTVERSE_URL + "/v1/almanac"
DEFAULT_MAILBOX_API_URL = DEFAULT_AGENTVERSE_URL + "/v1/agents"


class AgentEndpoint(BaseModel):
    url: str
    weight: int


class AgentRegistrationAttestation(BaseModel):
    agent_address: str
    protocols: List[str]
    endpoints: List[AgentEndpoint]
    metadata: Optional[Dict[str, Union[str, Dict[str, str]]]] = None
    signature: Optional[str] = None

    def sign(self, identity: Identity):
        digest = self._build_digest()
        self.signature = identity.sign_digest(digest)

    def verify(self) -> bool:
        if self.signature is None:
            raise ValueError("Attestation signature is missing")
        return Identity.verify_digest(
            self.agent_address, self._build_digest(), self.signature
        )

    def _build_digest(self) -> bytes:
        normalised_attestation = AgentRegistrationAttestation(
            agent_address=self.agent_address,
            protocols=sorted(self.protocols),
            endpoints=sorted(self.endpoints, key=lambda x: x.url),
            metadata=self.metadata,
        )

        sha256 = hashlib.sha256()
        sha256.update(
            json.dumps(
                normalised_attestation.model_dump(exclude={"signature"}),
                sort_keys=True,
                separators=(",", ":"),
            ).encode("utf-8")
        )
        return sha256.digest()


def register_with_agentverse(
    identity: Identity,
    url: str,
    protocol_digest: str,
    agentverse_token: str,
    agent_title: str,
    readme: str,
    *,
    almanac_api: Optional[str] = None,
):
    """
    Register the agent with the Agentverse API.
    :param identity: The identity of the agent.
    :param url: The URL endpoint for the agent
    :param protocol_digest: The digest of the protocol that the agent supports
    :param agentverse_token: The token to use to authenticate with the Agentverse API
    :param agent_title: The title of the agent
    :param readme: The readme for the agent
    :param almanac_api: The URL of the Almanac API (if different from the default)
    :return:
    """
    almanac_api = almanac_api or DEFAULT_ALMANAC_API_URL

    agent_address = identity.address

    # create the attestation
    attestation = AgentRegistrationAttestation(
        agent_address=agent_address,
        protocols=[protocol_digest],
        endpoints=[
            AgentEndpoint(url=url, weight=1),
        ],
        metadata=None,
    )

    # sign the attestation
    attestation.sign(identity)

    # submit the attestation to the API
    r = requests.post(
        f"{almanac_api}/agents",
        headers={"content-type": "application/json"},
        data=attestation.model_dump_json(),
    )
    r.raise_for_status()

    # check to see if the agent exists
    r = requests.get(
        f"{DEFAULT_MAILBOX_API_URL}/{agent_address}",
        headers={
            "content-type": "application/json",
            "authorization": f"Bearer {agentverse_token}",
        },
    )

    # if it doesn't then create it
    if r.status_code == 404:
        r = requests.post(
            f"{DEFAULT_MAILBOX_API_URL}/",
            headers={
                "content-type": "application/json",
                "authorization": f"Bearer {agentverse_token}",
            },
            json={
                "address": agent_address,
                "name": agent_title,
            },
        )
        r.raise_for_status()

    # update the readme and the title of the agent to make it easier to find
    r = requests.put(
        f"{DEFAULT_MAILBOX_API_URL}/{agent_address}",
        headers={
            "content-type": "application/json",
            "authorization": f"Bearer {agentverse_token}",
        },
        json={
            "name": agent_title,
            "readme": readme,
        },
    )
    r.raise_for_status()
