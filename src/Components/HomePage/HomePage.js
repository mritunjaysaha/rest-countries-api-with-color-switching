import React from "react";
import Navbar from "../Navbar/Navbar";
import AllCountries from "../Countries/AllCountries";
import "./HomePage.css";

export default function HomePage() {
    return (
        <body>
            <Navbar />
            <main>
                <AllCountries />
            </main>
        </body>
    );
}
