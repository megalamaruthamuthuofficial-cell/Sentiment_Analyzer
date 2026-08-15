import React, { useState } from "react";


function ProductURLInput({ onAnalyze }) {

    const [url, setUrl] = useState("");


    const handleSubmit = (event) => {

        event.preventDefault();

        if (!url.trim()) {

            alert("Please enter a product URL");

            return;
        }

        console.log("Button clicked!");
        console.log("URL:", url);

        onAnalyze(url);
    };


    return (
        <div className="url-input-container">

            <h2>Analyze Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Amazon or Flipkart product URL"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                />

                <button type="submit">
                    Analyze
                </button>

            </form>

        </div>
    );
}


export default ProductURLInput;