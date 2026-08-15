import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function RatingChart({ reviews }) {

    if (!reviews || reviews.length === 0) {
        return null;
    }

    const ratingCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    reviews.forEach((review) => {

        const rating = Number(review.rating);

        if (rating >= 1 && rating <= 5) {
            ratingCounts[rating]++;
        }

    });

    const data = {
        labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],

        datasets: [
            {
                label: "Number of Reviews",
                data: [
                    ratingCounts[1],
                    ratingCounts[2],
                    ratingCounts[3],
                    ratingCounts[4],
                    ratingCounts[5]
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,

        plugins: {
            legend: {
                display: false
            },

            title: {
                display: true,
                text: "Rating Distribution"
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

            <h2>Rating Analysis</h2>

            <Bar
                data={data}
                options={options}
            />

        </div>
    );
}

export default RatingChart;