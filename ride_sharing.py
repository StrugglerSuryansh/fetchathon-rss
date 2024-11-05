import random
from datetime import datetime

# Define the RideAgent class
class RideAgent:
    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.reputation = 5.0  # Starting reputation

    def update_location(self, new_location):
        self.location = new_location


# Define the DriverAgent subclass
class DriverAgent(RideAgent):
    def __init__(self, name, location, vehicle_type):
        super().__init__(name, location)
        self.vehicle_type = vehicle_type
        self.available = True

    def calculate_fare(self, distance):
        base_fare = 5.0
        per_km_rate = 1.5
        return base_fare + (distance * per_km_rate)


# Define the RiderAgent subclass
class RiderAgent(RideAgent):
    def request_ride(self, destination):
        return {"rider": self.name, "from": self.location, "to": destination}


# Instantiate the RideSharePlatform class
class RideSharePlatform:
    def __init__(self):
        self.drivers = []
        self.riders = []
        self.active_rides = {}

    def add_driver(self, driver):
        self.drivers.append(driver)

    def add_rider(self, rider):
        self.riders.append(rider)

    def find_available_drivers(self, rider_location):
        available_drivers = [driver for driver in self.drivers if driver.available]
        return available_drivers

    def start_ride(self, rider, driver, ride_id):
        driver.available = False
        self.active_rides[ride_id] = {
            "rider": rider,
            "driver": driver,
            "start_time": datetime.now()
        }
        print(f"Ride {ride_id} started with driver {driver.name}")

    def end_ride(self, ride_id):
        ride = self.active_rides.pop(ride_id)
        driver = ride["driver"]
        distance = random.uniform(5, 15)  # Simulate ride distance
        fare = driver.calculate_fare(distance)
        driver.available = True
        print(f"Ride {ride_id} ended, Driver {driver.name} paid ${fare:.2f}")


# Usage Example
if __name__ == "__main__":
    platform = RideSharePlatform()

    # Add drivers
    driver1 = DriverAgent("Alice", "Downtown", "Sedan")
    driver2 = DriverAgent("Bob", "Suburb", "SUV")
    platform.add_driver(driver1)
    platform.add_driver(driver2)

    # Add riders
    rider1 = RiderAgent("Charlie", "City Center")
    platform.add_rider(rider1)

    # Rider requests a ride
    ride_request = rider1.request_ride("Shopping Mall")
    available_drivers = platform.find_available_drivers(ride_request["from"])
    
    if available_drivers:
        # Start ride
        ride_id = 1  # Generate unique ride ID
        platform.start_ride(rider1, available_drivers[0], ride_id)

        # End ride
        platform.end_ride(ride_id)
    else:
        print("No drivers available")
