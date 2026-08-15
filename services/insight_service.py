def generate_insights(reviews):

    total = len(reviews)

    positive = 0
    negative = 0
    neutral = 0

    for review in reviews:

        sentiment = review.get("sentiment")

        if sentiment == "Positive":
            positive += 1

        elif sentiment == "Negative":
            negative += 1

        else:
            neutral += 1

    if total > 0:
        positive_percentage = round((positive / total) * 100, 2)
        negative_percentage = round((negative / total) * 100, 2)
        neutral_percentage = round((neutral / total) * 100, 2)
    else:
        positive_percentage = 0
        negative_percentage = 0
        neutral_percentage = 0

    if positive > negative and positive > neutral:
        overall = "Mostly Positive"

    elif negative > positive and negative > neutral:
        overall = "Mostly Negative"

    else:
        overall = "Mixed"

    return {
        "total_reviews": total,
        "positive": positive,
        "negative": negative,
        "neutral": neutral,
        "positive_percentage": positive_percentage,
        "negative_percentage": negative_percentage,
        "neutral_percentage": neutral_percentage,
        "overall": overall
    }