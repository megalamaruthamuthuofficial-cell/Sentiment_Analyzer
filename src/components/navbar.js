import React from "react";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-brand">
                🛍️ Product Sentiment Analyzer
            </div>

            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
            </div>

        </nav>
    );
}

export default Navbar;