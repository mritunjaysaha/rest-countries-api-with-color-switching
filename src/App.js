import React, { lazy, Suspense } from "react";
import HomePage from "./Components/HomePage/HomePage";
import LoadingSkeletonDetailsPage from "./Components/DetailsPage/LoadingSkeletonDetailsPage";
import { Router } from "@reach/router";
import Navbar from "../src/Components/Navbar/Navbar";
import "./style/style.scss";

const DetailsPage = lazy(() => import("./Components/DetailsPage/DetailsPage"));

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <HomePage exact path="/" />
            </Router>
            <Suspense fallback={<LoadingSkeletonDetailsPage />}>
                <Router>
                    <DetailsPage path="/details" />
                </Router>
            </Suspense>
        </>
    );
}

export default App;
