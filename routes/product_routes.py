from flask import Blueprint, request, jsonify

from utils.validators import validate_product_url

from services.amazon_scraper import scrape_amazon
from services.flipkart_scraper import scrape_flipkart

from services.text_cleaner import clean_text
from services.sentiment_service import analyze_sentiment
from services.insight_service import generate_insights


product_bp = Blueprint(
    "product",
    __name__,
    url_prefix="/api/product"
)


@product_bp.route("/analyze", methods=["POST"])
def analyze_product():

    try:

        # Get JSON data from frontend
        data = request.get_json()

        if not data:
            return jsonify({
                "status": "error",
                "message": "Request data is missing"
            }), 400


        # Get product URL
        url = data.get("url")

        if not url:
            return jsonify({
                "status": "error",
                "message": "Product URL is required"
            }), 400


        # Validate product URL
        is_valid, result = validate_product_url(url)

        if not is_valid:
            return jsonify({
                "status": "error",
                "message": result
            }), 400


        # Detect platform
        platform = result


        # Scrape reviews
        if platform == "Amazon":

            reviews = scrape_amazon(url)

        elif platform == "Flipkart":

            reviews = scrape_flipkart(url)

        else:

            return jsonify({
                "status": "error",
                "message": "Unsupported platform"
            }), 400


        # Process reviews
        processed_reviews = []


        for review in reviews:

            # Clean review
            cleaned_review = clean_text(review)

            # Skip empty reviews
            if not cleaned_review:
                continue


            # Analyze sentiment
            sentiment_result = analyze_sentiment(
                cleaned_review
            )


            # Combine review and sentiment
            processed_reviews.append({
                "review": review,
                "cleaned_review": cleaned_review,
                "sentiment": sentiment_result["sentiment"],
                "polarity": sentiment_result["polarity"],
                "subjectivity": sentiment_result["subjectivity"]
            })


        # Generate insights
        insights = generate_insights(
            processed_reviews
        )


        # Return response
        return jsonify({

            "status": "success",

            "message": "Product analyzed successfully",

            "url": url,

            "platform": platform,

            "reviews": processed_reviews,

            "summary": insights

        })


    except Exception as error:

        print("Product analysis error:", error)

        return jsonify({

            "status": "error",

            "message": "Failed to analyze product",

            "error": str(error)

        }), 500