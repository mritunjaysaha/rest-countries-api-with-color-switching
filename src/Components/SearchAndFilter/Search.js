import React from "react";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

// https://restcountries.eu/rest/v2/name/{name}
// https://restcountries.eu/rest/v2/capital/{capital}
// https://restcountries.eu/rest/v2/region/{region}

export default function Search(props) {
    return (
        <div className="search">
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
