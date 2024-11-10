from uagents import Agent, Bureau, Context, Model

# Define negotiation model with status
class OfferMessage(Model):
    price: float
    location: str
    round: int  # Track negotiation rounds
    status: str  # Add status field to track negotiation state

# Initialize agents
user_agent = Agent(name="user_agent", seed="user_seed_phrase", endpoint=None)
driver_agent = Agent(name="driver_agent", seed="driver_seed_phrase", endpoint=None)

# Define user and driver preferences for a more complex negotiation process
user_max_price = 24.0
user_initial_offer = 15.0
driver_min_price = 25.0
max_rounds = 5

@user_agent.on_event("startup")
async def start_negotiation(ctx: Context):
    initial_offer = OfferMessage(
        price=user_initial_offer,
        location="Downtown",
        round=1,
        status='pending'
    )
    ctx.logger.info(f"[User] Sending initial offer: ${initial_offer.price} at {initial_offer.location}")
    await ctx.send(driver_agent.address, initial_offer)

@user_agent.on_message(model=OfferMessage)
async def handle_counteroffer(ctx: Context, sender: str, msg: OfferMessage):
    ctx.logger.info(f"[User] Received counteroffer: ${msg.price} at {msg.location} (Round {msg.round})")
    
    # Handle already accepted offers
    if msg.status == 'accepted':
        ctx.logger.info(f"[User] Negotiation completed successfully at ${msg.price}")
        return
        
    if msg.price <= user_max_price and msg.round < max_rounds:
        if msg.price > user_initial_offer:
            final_offer = OfferMessage(
                price=msg.price,
                location=msg.location,
                round=msg.round,
                status='accepted'
            )
            ctx.logger.info(f"[User] Accepting offer at ${final_offer.price}")
            await ctx.send(driver_agent.address, final_offer)  # Send acceptance message
        else:
            ctx.logger.info(f"[User] Initial offer accepted.")
            accepted_offer = OfferMessage(
                price=msg.price,
                location=msg.location,
                round=msg.round,
                status='accepted'
            )
            await ctx.send(driver_agent.address, accepted_offer)
    else:
        if msg.round < max_rounds:
            next_offer = OfferMessage(
                price=min(msg.price - 0.5, user_max_price),
                location=msg.location,
                round=msg.round + 1,
                status='pending'
            )
            ctx.logger.info(f"[User] Sending counteroffer: ${next_offer.price}")
            await ctx.send(driver_agent.address, next_offer)
        else:
            ctx.logger.info("[User] Ending negotiation - offer exceeded max rounds or max price.")
            final_message = OfferMessage(
                price=msg.price,
                location=msg.location,
                round=msg.round,
                status='rejected'
            )
            await ctx.send(driver_agent.address, final_message)

@driver_agent.on_message(model=OfferMessage)
async def handle_offer(ctx: Context, sender: str, msg: OfferMessage):
    ctx.logger.info(f"[Driver] Received offer: ${msg.price} at {msg.location} (Round {msg.round})")
    
    # Handle final states
    if msg.status == 'accepted':
        ctx.logger.info(f"[Driver] Negotiation completed with accepted offer: ${msg.price}")
        return
    elif msg.status == 'rejected':
        ctx.logger.info(f"[Driver] Negotiation ended with rejection at round {msg.round}")
        return
    
    # Driver's decision logic
    if msg.price >= driver_min_price:
        ctx.logger.info(f"[Driver] Offer accepted at ${msg.price}")
        accepted_offer = OfferMessage(
            price=msg.price,
            location=msg.location,
            round=msg.round,
            status='accepted'
        )
        await ctx.send(user_agent.address, accepted_offer)
    else:
        if msg.round < max_rounds:
            counter_offer_price = max(msg.price + 1.0, driver_min_price)
            counter_offer = OfferMessage(
                price=counter_offer_price,
                location=msg.location,
                round=msg.round + 1,
                status='pending'
            )
            ctx.logger.info(f"[Driver] Sending counteroffer: ${counter_offer.price}")
            await ctx.send(user_agent.address, counter_offer)
        else:
            ctx.logger.info("[Driver] Ending negotiation - offer too low after max rounds.")
            final_message = OfferMessage(
                price=msg.price,
                location=msg.location,
                round=msg.round,
                status='rejected'
            )
            await ctx.send(user_agent.address, final_message)

# Set up and run the bureau
bureau = Bureau(endpoint="http://127.0.0.1:8001", port=8001)  # Use a different port
bureau.add(user_agent)
bureau.add(driver_agent)

if __name__ == "__main__":
    try:
        bureau.run()
    except KeyboardInterrupt:
        print("\nShutting down gracefully...")
    except Exception as e:
        print(f"Error occurred: {e}")
    finally:
        # Clean up code if needed
        pass
