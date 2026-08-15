import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function SentimentChart({ summary }) {

    if (!summary) {
        return null;
    }

    const data = {
        labels: ["Positive", "Negative", "Neutral"],

        datasets: [
            {
                label: "Sentiment",
                data: [
                    summary.positive || 0,
                    summary.negative || 0,
                    summary.neutral || 0
                ],
                backgroundColor: [
                    "#4CAF50",
                    "#F44336",
                    "#FFC107"
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    };

    return (
        <div className="chart-container">

            <h2>Sentiment Analysis</h2>

            <Pie
                data={data}
                options={options}
            />

        </div>
    );
}

export default SentimentChart;