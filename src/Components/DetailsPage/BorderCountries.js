import React from "react";

export default function BorderCountries(props) {
    console.log(props);
    const countries = props.countries.map((country) => {
        return (
            <button className="border-countries-btn" key={country}>
                {country}
            </button>
        );
    });

    return <>{countries}</>;
}
