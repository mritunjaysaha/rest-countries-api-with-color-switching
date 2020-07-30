import React, { useEffect, useState } from "react";

export default function BorderCountries(props) {
    const [countryNames, setCountryNames] = useState([]);
    const [border, setBorder] = useState();

    useEffect(
        function () {
            async function getNames(borderCountries) {
                const data = [];
                for (let i = 0; i < borderCountries.length; i++) {
                    const response = await fetch(
                        `https://restcountries.eu/rest/v2/alpha/${borderCountries[i]}`
                    );
                    const processedResponse = await response.json();
                    data.push(processedResponse.name);
                }
                setCountryNames(data);
            }

            getNames(props.countries);
        },
        [props.countries]
    );

    useEffect(
        function () {
            const data = (
                <>
                    {countryNames.map((country) => {
                        return (
                            <button
                                key={country}
                                className="border-countries-btn"
                            >
                                {country}
                            </button>
                        );
                    })}
                </>
            );

            setBorder(data);
        },
        [countryNames]
    );
    return <>{border}</>;
}
