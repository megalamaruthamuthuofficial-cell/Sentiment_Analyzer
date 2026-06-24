from pymongo import MongoClient


client = MongoClient(
    "mongodb+srv://kavithatamilarasan1107_db_user:kavi1107@sentiment-cluster.lbur2vv.mongodb.net/?appName=sentiment-cluster"
)

db = client["sentiment_db"]

reviews_collection = db["reviews"]