import React from "react";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
export default function Navbar() {
    return (
        <nav className="navbar">
            <h3>Where in the world?</h3>
            <div className="theme-switch">
                <UilMoon className="icons" />
                <p>Dark Mode</p>
            </div>
        </nav>
    );
}
