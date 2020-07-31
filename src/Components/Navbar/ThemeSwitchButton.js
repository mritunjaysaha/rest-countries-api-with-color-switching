import React, { useState } from "react";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";

export default function ThemeSwitchButton() {
    const [nextTheme, setNextTheme] = useState("theme-light");
    const body = document.querySelector("body");

    body.classList.add("theme-light");
    function handleTheme() {
        console.log("next", nextTheme);
        if (nextTheme === "theme-light") {
            // dark theme
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
            body.style.background = "hsl(209, 23%, 22%)";
            body.style.color = "hsl(0, 0%, 100%)";
            setNextTheme("theme-dark");
        } else {
            // light theme
            body.classList.add("theme-light");
            body.classList.remove("theme-dark");
            body.style.background = "hsl(0, 0%, 98%)";
            body.style.color = "hsl(200, 15%, 8%)";
            setNextTheme("theme-light");
        }
    }
    return (
        <div className="theme-switch" onClick={handleTheme}>
            <UilMoon className="icons" />
            <p>Dark Mode</p>
        </div>
    );
}
