import React from "react";

function ReviewTable({ reviews }) {

    if (!reviews || reviews.length === 0) {
        return (
            <div className="review-table">
                <h2>Customer Reviews</h2>
                <p>No reviews available.</p>
            </div>
        );
    }

    return (
        <div className="review-table">

            <h2>Customer Reviews</h2>

            <table>

                <thead>
                    <tr>
                        <th>Review</th>
                        <th>Rating</th>
                        <th>Sentiment</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>

                    {reviews.map((review, index) => (

                        <tr key={index}>

                            <td>
                                {review.text || "No review"}
                            </td>

                            <td>
                                {review.rating || "N/A"} ⭐
                            </td>

                            <td>
                                {review.sentiment || "Neutral"}
                            </td>

                            <td>
                                {review.date || "N/A"}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ReviewTable;