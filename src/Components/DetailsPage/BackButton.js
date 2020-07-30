import React from "react";
import UilLeftArrow from "@iconscout/react-unicons/icons/uil-left-arrow-to-left";
import { navigate } from "@reach/router";
export default function BackButton() {
    return (
        <>
            <button
                className="back-btn"
                onClick={() => {
                    navigate("/");
                }}
            >
                <UilLeftArrow className="icons" /> <p>Back</p>
            </button>
        </>
    );
}
