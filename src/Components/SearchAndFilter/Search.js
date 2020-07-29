import React from "react";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

export default function Search(props) {
    return (
        <div className="searchandfilter search">
            <UilSearch className="icons search-icon" />
            <input
                id="search"
                type="text"
                placeholder="Search for a country..."
                value={props.value}
                onChange={(e) => {
                    props.search(e);
                }}
            />
        </div>
    );
}
