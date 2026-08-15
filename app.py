from flask import Flask, jsonify
from flask_cors import CORS

from config import BACKEND_HOST, BACKEND_PORT, DEBUG_MODE
from routes.product_routes import product_bp


app = Flask(__name__)

CORS(app)


# Register Product Routes
app.register_blueprint(product_bp)


@app.route("/", methods=["GET"])
def home():

    return jsonify({
        "status": "success",
        "message": "Product Sentiment Analyzer Backend is running"
    })


@app.route("/api/health", methods=["GET"])
def health_check():

    return jsonify({
        "status": "healthy",
        "service": "Product Sentiment Analyzer API"
    })


if __name__ == "__main__":

    app.run(
        host=BACKEND_HOST,
        port=BACKEND_PORT,
        debug=DEBUG_MODE
    )