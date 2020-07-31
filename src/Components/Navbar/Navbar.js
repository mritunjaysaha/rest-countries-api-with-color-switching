import React from "react";
import ThemeSwitcButton from "./ThemeSwitchButton";
export default function Navbar() {
    return (
        <nav className="navbar">
            <h3>Where in the world?</h3>
            <ThemeSwitcButton />
        </nav>
    );
}
