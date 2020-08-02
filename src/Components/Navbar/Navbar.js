import React from "react";
import ThemeSwitcButton from "./ThemeSwitchButton";
import { navigate } from "@reach/router";
export default function Navbar() {
    return (
        <nav className="navbar">
            <h3
                onClick={() => {
                    navigate("/");
                }}
            >
                Where in the world?
            </h3>
            <ThemeSwitcButton />
        </nav>
    );
}
