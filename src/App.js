import React from "react";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

function App() {

    const path = window.location.pathname;

    if (path === "/dashboard") {
        return <Dashboard />;
    }

    return <Home />;
}

export default App;