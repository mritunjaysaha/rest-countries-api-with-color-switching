import React, { useState } from "react";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";

export default function ThemeSwitchButton() {
    const [nextTheme, setNextTheme] = useState("theme-light");
    const [mode, setMode] = useState("Dark");
    const body = document.querySelector("body");

    body.classList.add("theme-light");
    function handleTheme() {
        if (nextTheme === "theme-light") {
            // dark theme
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
            setNextTheme("theme-dark");
            setMode("Light");
        } else {
            // light theme
            body.classList.add("theme-light");
            body.classList.remove("theme-dark");
            setNextTheme("theme-light");
            setMode("Dark");
        }
    }
    return (
        <div className="theme-switch" onClick={handleTheme}>
            <UilMoon className="icons" />
            <p>{mode} Mode</p>
        </div>
    );
}
