import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import { Router } from "@reach/router";
import Navbar from "../src/Components/Navbar/Navbar";
function App() {
    return (
        <>
            <Navbar />
            <Router>
                <HomePage exact path="/" />
                <DetailsPage path="/details" />
            </Router>
        </>
    );
}

export default App;
