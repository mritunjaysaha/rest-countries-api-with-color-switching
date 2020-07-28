import React from "react";
import Navbar from "../Navbar/Navbar";
import AllCountries from "../Countries/AllCountries";
import Search from "../SearchAndFilter/Search";
import "./HomePage.css";

export default function HomePage() {
    return (
        <body>
            <Navbar />
            <main>
                <Search />
                <AllCountries />
            </main>
        </body>
    );
}
