# app/services/price_comparison_agent.py
import random

class PriceComparisonAgent:
    def __init__(self):
        self.platforms = ['DecentralizedRideShare', 'Uber', 'Lyft', 'Bolt']

    def compare_prices(self, from_location, to_location):
        prices = []
        for platform in self.platforms:
            price = self.get_price(platform, from_location, to_location)
            prices.append(price)
        return sorted(prices, key=lambda x: x['fare'])

    def get_price(self, platform, from_location, to_location):
        # Simulate price calculation (replace with actual API calls or blockchain interactions)
        base_fare = random.uniform(2.0, 5.0)
        distance = random.uniform(1, 20)
        per_km_rate = random.uniform(1.0, 1.5)
        fare = base_fare + (distance * per_km_rate)
        
        return {
            'platform': platform,
            'fare': round(fare, 2),
            'distance': round(distance, 1),
            'pickup_time': random.randint(3, 15)
        }