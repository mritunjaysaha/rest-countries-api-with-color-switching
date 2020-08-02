import React, { useState, useEffect } from "react";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";

export default function ThemeSwitchButton() {
    const [currentTheme, setCurrentTheme] = useState("theme-light");

    const [mode, setMode] = useState("Dark");
    const body = document.querySelector("body");

    useEffect(
        function () {
            const theme = localStorage.getItem("theme");
            if (theme !== null) {
                setCurrentTheme(theme);
            } else {
                setCurrentTheme("theme-dark");
            }
            body.classList.add(theme);
        },
        [body.classList]
    );

    body.classList.add("theme-light");
    function handleTheme() {
        if (currentTheme === "theme-light") {
            // dark theme
            body.classList.remove("theme-light");
            body.classList.add("theme-dark");
            localStorage.setItem("theme", "theme-dark");
            setCurrentTheme("theme-dark");
            setMode("Light");
        } else {
            // light theme
            body.classList.add("theme-light");
            body.classList.remove("theme-dark");
            localStorage.setItem("theme", "theme-light");

            setCurrentTheme("theme-light");
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
