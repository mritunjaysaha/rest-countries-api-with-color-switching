import React from "react";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";

export default function ThemeSwitchButton() {
    const body = document.querySelector("body");
    console.log("body", body);
    body.classList.add("dark");
    function handleTheme() {
        console.log("clicked");
    }
    return (
        <div className="theme-switch" onClick={handleTheme}>
            <UilMoon className="icons" />
            <p>Dark Mode</p>
        </div>
    );
}
