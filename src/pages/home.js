import React, { useState } from "react";

import Navbar from "../components/navbar";
import ProductURLInput from "../components/productURLinput";
import ProductInfo from "../components/productinfo";
import SummaryCards from "../components/summarycards";
import SentimentChart from "../components/sentimentchart";
import RatingChart from "../components/ratingchart";
import TrendChart from "../components/trendchart";
import WordFrequency from "../components/wordfrequency";
import ReviewTable from "../components/reviewtable";

import { analyzeProduct } from "../services/api";


function Home() {

    const [product, setProduct] = useState(null);
    const [summary, setSummary] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [words, setWords] = useState([]);


    const handleAnalyze = async (url) => {

        try {

            console.log("Analyzing URL:", url);

            const result = await analyzeProduct(url);

            console.log("Backend Response:", result);


            if (result.status === "success") {

                // Backend data → Frontend state
                setProduct(result.product);

                setSummary(result.summary);

                setReviews(result.reviews);

                setWords(result.words);


                alert(
                    "Success!\n" +
                    "Platform: " + result.platform +
                    "\nReviews: " + result.reviews.length
                );

            } else {

                alert(
                    "Error: " + result.message
                );

            }

        } catch (error) {

            console.error(
                "Analysis failed:",
                error
            );

            alert(
                "Unable to connect to backend"
            );

        }
    };


    return (
        <div>

            <Navbar />

            <main>

                <ProductURLInput
                    onAnalyze={handleAnalyze}
                />

                <ProductInfo
                    product={product}
                />

                <SummaryCards
                    summary={summary}
                />

                <SentimentChart
                    summary={summary}
                />

                <RatingChart
                    reviews={reviews}
                />

                <TrendChart
                    reviews={reviews}
                />

                <WordFrequency
                    words={words}
                />

                <ReviewTable
                    reviews={reviews}
                />

            </main>

        </div>
    );
}


export default Home;