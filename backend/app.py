# app/main.py
from flask import Flask
from flask_cors import CORS
from app.routes import price_comparison

app = Flask(__name__)
CORS(app)

app.register_blueprint(price_comparison.bp)

if __name__ == '__main__':
    app.run(debug=True)