import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function TrendChart({ reviews }) {

    if (!reviews || reviews.length === 0) {
        return null;
    }

    const trendData = {};

    reviews.forEach((review) => {

        const date = review.date || "Unknown";

        if (!trendData[date]) {
            trendData[date] = {
                positive: 0,
                negative: 0,
                neutral: 0
            };
        }

        if (review.sentiment === "Positive") {
            trendData[date].positive++;
        }

        else if (review.sentiment === "Negative") {
            trendData[date].negative++;
        }

        else {
            trendData[date].neutral++;
        }
    });

    const dates = Object.keys(trendData).sort();

    const data = {
        labels: dates,

        datasets: [
            {
                label: "Positive",
                data: dates.map(
                    (date) => trendData[date].positive
                ),
                borderWidth: 2
            },

            {
                label: "Negative",
                data: dates.map(
                    (date) => trendData[date].negative
                ),
                borderWidth: 2
            },

            {
                label: "Neutral",
                data: dates.map(
                    (date) => trendData[date].neutral
                ),
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,

        plugins: {
            title: {
                display: true,
                text: "Sentiment Trend"
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="chart-container">

            <h2>Sentiment Trend</h2>

            <Line
                data={data}
                options={options}
            />

        </div>
    );
}

export default TrendChart;