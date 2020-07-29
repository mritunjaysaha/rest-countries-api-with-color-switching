import React, { useState, useEffect } from "react";
import CountryCards from "./CountryCards";
import useCountriesData from "../CustomHooks/countriesData";
import Search from "../SearchAndFilter/Search";
import SimpleSelect from "../SearchAndFilter/Select";
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

    function search(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <section className="search-filter">
                <Search search={search} value={query} />
                <SimpleSelect />
            </section>
            <section id="countries">{country}</section>
        </>
    );
}
