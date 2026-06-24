from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment import analyze_sentiment
from db import reviews_collection
from scraper import scrape_reviews

app = Flask(__name__)

CORS(app)



@app.route("/scrape")
def scrape():

    reviews = scrape_reviews()

    for review in reviews:

        sentiment = analyze_sentiment(review)

        reviews_collection.insert_one({
            "product": "Demo Product",
            "review": review,
            "sentiment": sentiment
        })

    return jsonify({
        "message": "Reviews Scraped and Stored",
        "count": len(reviews)
    })

@app.route("/test")
def test():

    sentiment = analyze_sentiment(
        "This phone is amazing"
    )

    return {
        "sentiment": sentiment
    }

@app.route("/")
def home():
    return "Backend Running"

@app.route("/reviews/<product>")
def get_reviews(product):

    reviews = list(
        reviews_collection.find(
            {"product": product},
            {"_id": 0}
        )
    )

    return jsonify(reviews)
@app.route("/analyze", methods=["POST"])
def analyze():

    try:
        data = request.json

        review = data["review"]

        sentiment = analyze_sentiment(review)

        return jsonify({
            "sentiment": sentiment
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400
@app.route("/reviews")
def reviews():

    data = list(
        reviews_collection.find(
            {},
            {"_id": 0}
        )
    )

    return jsonify(data)
@app.route("/dashboard")
def dashboard():

    positive = reviews_collection.count_documents(
        {"sentiment": "Positive"}
    )

    negative = reviews_collection.count_documents(
        {"sentiment": "Negative"}
    )

    neutral = reviews_collection.count_documents(
        {"sentiment": "Neutral"}
    )

    return jsonify({
        "positive": positive,
        "negative": negative,
        "neutral": neutral
    })

if __name__ == "__main__":
    app.run(debug=True)
