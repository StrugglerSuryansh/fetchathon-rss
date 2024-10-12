# Decentralized Ride-Sharing Service

import random
from datetime import datetime, timedelta
from fetchai.ledger.crypto import Entity, Address
from fetchai.ledger.contract import Contract
from fetchai.ledger.api import LedgerApi
from fetchai.ledger.api.token import TokenTxFactory

# Define the RideAgent class (base class for both drivers and riders)
class RideAgent(Entity):
    def __init__(self, name, location):
        super().__init__()
        self.name = name
        self.location = location
        self.reputation = 5.0  # Initial reputation score out of 10

    def update_location(self, new_location):
        self.location = new_location

    def update_reputation(self, new_score):
        self.reputation = (self.reputation + new_score) / 2

# Define the DriverAgent class
class DriverAgent(RideAgent):
    def __init__(self, name, location, vehicle_type):
        super().__init__(name, location)
        self.vehicle_type = vehicle_type
        self.availability = True

    def set_availability(self, status):
        self.availability = status

    def calculate_fare(self, distance):
        base_fare = 5.0
        per_km_rate = 1.5
        return base_fare + (distance * per_km_rate)

# Define the RiderAgent class
class RiderAgent(RideAgent):
    def __init__(self, name, location):
        super().__init__(name, location)

    def request_ride(self, destination):
        return {"rider": self.name, "from": self.location, "to": destination}

# Define the RideSharePlatform class
class RideSharePlatform:
    def __init__(self):
        self.drivers = []
        self.riders = []
        self.active_rides = {}
        self.ledger_api = LedgerApi('127.0.0.1', 8000)
        self.token_factory = TokenTxFactory(self.ledger_api)
        self.ride_contract = self.deploy_ride_contract()

    def deploy_ride_contract(self):
        contract = Contract('RideShare')
        contract.action('start_ride', 'driver_address', 'rider_address', 'uint64')
        contract.action('end_ride', 'ride_id', 'uint64')
        contract.action('pay_driver', 'driver_address', 'uint64')
        contract.create(self.ledger_api)
        return contract

    def add_driver(self, driver):
        self.drivers.append(driver)

    def add_rider(self, rider):
        self.riders.append(rider)

    def find_available_drivers(self, rider_location, max_distance=10):
        available_drivers = []
        for driver in self.drivers:
            if driver.availability and self.calculate_distance(rider_location, driver.location) <= max_distance:
                available_drivers.append(driver)
        return available_drivers

    def calculate_distance(self, location1, location2):
        # Simplified distance calculation (replace with actual geo-distance calculation)
        return random.uniform(1, 20)

    def negotiate_ride(self, ride_request, available_drivers):
        best_offer = None
        for driver in available_drivers:
            distance = self.calculate_distance(ride_request["from"], ride_request["to"])
            fare = driver.calculate_fare(distance)
            if best_offer is None or fare < best_offer["fare"]:
                best_offer = {
                    "driver": driver,
                    "fare": fare,
                    "pickup_time": datetime.now() + timedelta(minutes=random.randint(5, 15))
                }
        return best_offer

    def start_ride(self, rider, driver, destination):
        ride_id = len(self.active_rides) + 1
        self.active_rides[ride_id] = {
            "rider": rider,
            "driver": driver,
            "destination": destination,
            "start_time": datetime.now()
        }
        driver.set_availability(False)

        # Use smart contract to record ride start
        tx = self.token_factory.action(
            self.ride_contract.address,
            'start_ride',
            Address(driver.address),
            Address(rider.address),
            ride_id
        )
        tx.sign(Entity())
        self.ledger_api.sync(tx)

        return ride_id

    def end_ride(self, ride_id):
        ride = self.active_rides.pop(ride_id)
        ride["driver"].set_availability(True)
        duration = (datetime.now() - ride["start_time"]).total_seconds() / 60  # in minutes
        distance = self.calculate_distance(ride["driver"].location, ride["destination"])
        fare = ride["driver"].calculate_fare(distance)

        # Use smart contract to record ride end and payment
        tx = self.token_factory.action(
            self.ride_contract.address,
            'end_ride',
            ride_id
        )
        tx.sign(Entity())
        self.ledger_api.sync(tx)

        tx = self.token_factory.action(
            self.ride_contract.address,
            'pay_driver',
            Address(ride["driver"].address),
            int(fare * 100)  # Convert to smallest token unit
        )
        tx.sign(ride["rider"])
        self.ledger_api.sync(tx)

        return {"duration": duration, "distance": distance, "fare": fare}

# Usage example
if __name__ == "__main__":
    platform = RideSharePlatform()

    # Add drivers
    driver1 = DriverAgent("Alice", "Downtown", "Sedan")
    driver2 = DriverAgent("Bob", "Suburb", "SUV")
    platform.add_driver(driver1)
    platform.add_driver(driver2)

    # Add riders
    rider1 = RiderAgent("Charlie", "City Center")
    rider2 = RiderAgent("David", "Airport")
    platform.add_rider(rider1)
    platform.add_rider(rider2)

    # Simulate a ride request
    ride_request = rider1.request_ride("Shopping Mall")
    available_drivers = platform.find_available_drivers(ride_request["from"])
    best_offer = platform.negotiate_ride(ride_request, available_drivers)

    if best_offer:
        print(f"Ride offer: Driver {best_offer['driver'].name}, Fare: ${best_offer['fare']:.2f}, Pickup time: {best_offer['pickup_time']}")
        
        # Start the ride
        ride_id = platform.start_ride(rider1, best_offer['driver'], ride_request["to"])
        print(f"Ride {ride_id} started")

        # Simulate ride completion
        ride_summary = platform.end_ride(ride_id)
        print(f"Ride completed: Duration: {ride_summary['duration']:.1f} minutes, Distance: {ride_summary['distance']:.1f} km, Final fare: ${ride_summary['fare']:.2f}")
    else:
        print("No drivers available")