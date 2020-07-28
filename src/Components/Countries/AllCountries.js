import React, { useState, useEffect } from "react";
import CountryCards from "./CountryCards";
import useCountriesData from "../CustomHooks/countriesData";

export default function AllCountries() {
    const [allCountries, error] = useCountriesData();
    const [country, setCountry] = useState();
    useEffect(
        function () {
            if (error === false) {
                const country = (
                    <div className="cards-container">
                        {allCountries.map((data) => {
                            return (
                                <CountryCards
                                    flag={data.flag}
                                    name={data.name}
                                    population={data.population}
                                    region={data.region}
                                    capital={data.capital}
                                />
                            );
                        })}
                    </div>
                );

                setCountry(country);
            }
        },
        [allCountries, error]
    );

    return <>{country}</>;
}
