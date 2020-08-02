import React, { useState, useEffect } from "react";
import CountryCards from "./CountryCards";
import useCountriesData from "../CustomHooks/countriesData";
import useFilteredData from "../CustomHooks/filterData";
import Search from "../SearchAndFilter/Search";
import Filter from "../SearchAndFilter/Filter";
export default function AllCountries() {
    const [country, setCountry] = useState();
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("asia");
    const [flag, setFlag] = useState(false);
    const [allCountries, allError] = useCountriesData(query, false);
    const [filteredCountries, filteredError] = useFilteredData(region);
    useEffect(
        function () {
            if (allError === false && flag === false) {
                const country = (
                    <div className="cards-container">
                        {allCountries.map((data) => {
                            return (
                                <CountryCards
                                    key={data.name}
                                    flag={data.flag}
                                    name={data.name}
                                    population={data.population.toLocaleString()}
                                    region={data.region}
                                    capital={data.capital}
                                />
                            );
                        })}
                    </div>
                );

                setCountry(country);
            } else {
                const country = (
                    <div className="not-found">
                        <p>No match found</p>
                        <div className="not-found-illustration"></div>
                    </div>
                );

                setCountry(country);
            }
        },
        [allCountries, allError, flag]
    );

    useEffect(
        function () {
            if (filteredError === false && flag === true) {
                const country = (
                    <div className="cards-container">
                        {filteredCountries.map((data) => {
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
        [filteredCountries, filteredError, flag]
    );

    function handleSearch(e) {
        setQuery(e.target.value);
        setFlag(false);
    }
    function handleRegion(e) {
        if (e.target.value === "") {
            setQuery("");
            setFlag(false);
        } else {
            setRegion(e.target.value);
            setFlag(true);
        }
    }

    return (
        <>
            <section className="search-filter">
                <Search search={handleSearch} value={query} />
                <Filter filter={handleRegion} value={query} />
            </section>
            <section id="countries">{country}</section>
        </>
    );
}
