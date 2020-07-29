import React from "react";
import Navbar from "../Navbar/Navbar";
import AllCountries from "../Countries/AllCountries";

import "../../style/style.css";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <main>
                <AllCountries />
            </main>
        </div>
    );
}
