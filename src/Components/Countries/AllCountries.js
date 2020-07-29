import React, { useState, useEffect } from "react";
import CountryCards from "./CountryCards";
import useCountriesData from "../CustomHooks/countriesData";
import Search from "../SearchAndFilter/Search";
import Filter from "../SearchAndFilter/Filter";
export default function AllCountries() {
    const [country, setCountry] = useState();
    const [query, setQuery] = useState("");
    const [allCountries, error] = useCountriesData(query);
    useEffect(
        function () {
            if (error === false) {
                const country = (
                    <div className="cards-container">
                        {allCountries.map((data) => {
                            return (
                                <CountryCards
                                    key={data.name}
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

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <section className="search-filter">
                <Search search={handleChange} value={query} />
                <Filter filter={handleChange} value={query} />
            </section>
            <section id="countries">{country}</section>
        </>
    );
}
