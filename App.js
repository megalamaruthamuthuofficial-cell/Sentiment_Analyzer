import "./App.css";

import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function App() {

  const chartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [78, 12, 10],
        backgroundColor: [
          "#22C55E",
          "#F59E0B",
          "#EF4444",
        ],
        borderColor: [
          "#22C55E",
          "#F59E0B",
          "#EF4444",
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="container">

      <div className="card">
        <h1>🛒 Product Sentiment Analyzer</h1>

        <p className="subtitle">
          Analyze Amazon & Flipkart Reviews using NLP and AI
        </p>

        <input
          type="text"
          placeholder="Paste Product URL Here..."
          className="input-box"
        />

        <button className="analyze-btn">
          🔍 Analyze Product
        </button>
      </div>

      <div className="result-card">

        <h2>📊 Analysis Result</h2>

        <div className="stats-container">

          <div className="stat-card">
            <h3>⭐ Rating</h3>
            <p>4.3 / 5</p>
          </div>

          <div className="stat-card">
            <h3>📝 Reviews</h3>
            <p>1250</p>
          </div>

          <div className="stat-card">
            <h3>🤖 Confidence</h3>
            <p>92%</p>
          </div>

        </div>

        <div className="chart-container">

          <div className="chart-box">

            <Pie
              data={chartData}
              options={chartOptions}
            />

          </div>

        </div>

        <div className="sentiment-box">

          <div className="positive">
            <h3>😊 Positive</h3>
            <p>78%</p>
          </div>

          <div className="neutral">
            <h3>😐 Neutral</h3>
            <p>12%</p>
          </div>

          <div className="negative">
            <h3>😔 Negative</h3>
            <p>10%</p>
          </div>

        </div>

        <div className="recommendation">
          <h3>💡 Recommendation</h3>
          <p>✅ Strong Buy</p>
        </div>

        <div className="summary">

          <h3>📌 Overall Summary</h3>

          <p>
            Most users are highly satisfied with the product.
            Good performance, excellent battery backup and
            value for money. Positive reviews dominate
            the sentiment analysis.
          </p>

        </div>

        <div className="reviews">

          <h3>⭐ Top User Reviews</h3>

          <div className="review">
            ⭐⭐⭐⭐⭐ Excellent product.
            Highly recommended.
          </div>

          <div className="review">
            ⭐⭐⭐⭐⭐ Good quality and worth the price.
          </div>

          <div className="review">
            ⭐⭐⭐⭐ Amazing battery backup and smooth performance.
          </div>

        </div>

        <button className="new-search">
          🔄 Analyze Another Product
        </button>

      </div>

    </div>
  );
}

export default App;