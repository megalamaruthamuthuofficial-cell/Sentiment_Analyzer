import React from "react";

import Navbar from "../components/navbar";
import SummaryCards from "../components/summarycards";
import SentimentChart from "../components/sentimentchart";
import RatingChart from "../components/ratingchart";
import TrendChart from "../components/trendchart";
import WordFrequency from "../components/wordfrequency";
import ReviewTable from "../components/reviewtable";

function Dashboard() {

    const analysisData = {
        summary: null,
        reviews: [],
        words: []
    };

    return (
        <div>

            <Navbar />

            <main>

                <h1>Product Sentiment Dashboard</h1>

                <SummaryCards
                    summary={analysisData.summary}
                />

                <SentimentChart
                    summary={analysisData.summary}
                />

                <RatingChart
                    reviews={analysisData.reviews}
                />

                <TrendChart
                    reviews={analysisData.reviews}
                />

                <WordFrequency
                    words={analysisData.words}
                />

                <ReviewTable
                    reviews={analysisData.reviews}
                />

            </main>

        </div>
    );
}

export default Dashboard;