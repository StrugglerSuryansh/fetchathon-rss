# app/routes/price_comparison.py
from flask import Blueprint, request, jsonify
from app.services.price_comparison_agent import PriceComparisonAgent

bp = Blueprint('price_comparison', __name__, url_prefix='/api')

@bp.route('/compare-prices', methods=['GET'])
def compare_prices():
    from_location = request.args.get('from')
    to_location = request.args.get('to')
    
    agent = PriceComparisonAgent()
    prices = agent.compare_prices(from_location, to_location)
    
    return jsonify(prices)

@bp.route('/book-ride', methods=['POST'])
def book_ride():
    platform = request.json.get('platform')
    # Implement booking logic here
    return jsonify({'status': 'Booked', 'platform': platform})