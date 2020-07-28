import React from "react";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

export default function Search() {
    return (
        <div className="search">
            <UilSearch className="icons" />
            <input type="text" placeholder="Search for a country..." />
        </div>
    );
}
