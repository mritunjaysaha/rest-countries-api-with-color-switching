import React from "react";
import Navbar from "../Navbar/Navbar";
import AllCountries from "../Countries/AllCountries";
import Search from "../SearchAndFilter/Search";
import SimpleSelect from "../SearchAndFilter/Select";
import "./HomePage.css";

export default function HomePage() {
    return (
        <body>
            <Navbar />
            <main>
                <section className="search-filter">
                    <Search />
                    <SimpleSelect />
                </section>
                <AllCountries />
            </main>
        </body>
    );
}
