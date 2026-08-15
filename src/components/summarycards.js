import React from "react";

function SummaryCards({ summary }) {

    if (!summary) {
        return null;
    }

    return (
        <div className="summary-cards">

            <div className="summary-card">
                <h3>Total Reviews</h3>
                <p>{summary.total_reviews || 0}</p>
            </div>

            <div className="summary-card">
                <h3>Positive</h3>
                <p>{summary.positive_percentage || 0}%</p>
            </div>

            <div className="summary-card">
                <h3>Negative</h3>
                <p>{summary.negative_percentage || 0}%</p>
            </div>

            <div className="summary-card">
                <h3>Neutral</h3>
                <p>{summary.neutral_percentage || 0}%</p>
            </div>

            <div className="summary-card">
                <h3>Overall</h3>
                <p>{summary.overall || "N/A"}</p>
            </div>

        </div>
    );
}

export default SummaryCards;