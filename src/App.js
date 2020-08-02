import React, { lazy, Suspense } from "react";
import LoadingSkeletonHomePage from "./Components/Countries/LoadingSkeletonHomePage";
import LoadingSkeletonDetailsPage from "./Components/DetailsPage/LoadingSkeletonDetailsPage";
import { Router } from "@reach/router";
import Navbar from "../src/Components/Navbar/Navbar";
import "./style/style.scss";

const HomePage = lazy(() => import("./Components/Countries/AllCountries"));
const DetailsPage = lazy(() => import("./Components/DetailsPage/DetailsPage"));

function App() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<LoadingSkeletonHomePage />}>
                <Router>
                    <HomePage exact path="/" />
                </Router>
            </Suspense>
            {/* <Suspense fallback={<LoadingSkeletonDetailsPage />}>
                <Router>
                    <DetailsPage path="/details" />
                </Router>
            </Suspense> */}
            <LoadingSkeletonDetailsPage path="/details" />
        </>
    );
}

export default App;
