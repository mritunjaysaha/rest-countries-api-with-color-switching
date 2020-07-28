import React, { useState, useEffect } from "react";
import useCountriesData from "../CustomHooks/countriesData";

import CountryCards from "../Countries/CountryCards";

import "./HomePage.css";
export default function HomePage() {
    const [allCountries, error] = useCountriesData();
    const [data, setData] = useState();
    const [country, setCountry] = useState();
    useEffect(
        function () {
            if (error === false) {
                setData(allCountries[0]);
                const data = allCountries[0];

                const country = (
                    <div className="cards-container">
                        <CountryCards
                            flag={data.flag}
                            name={data.name}
                            population={data.population}
                            region={data.region}
                            capital={data.capital}
                        />{" "}
                        <CountryCards
                            flag={data.flag}
                            name={data.name}
                            population={data.population}
                            region={data.region}
                            capital={data.capital}
                        />{" "}
                        <CountryCards
                            flag={data.flag}
                            name={data.name}
                            population={data.population}
                            region={data.region}
                            capital={data.capital}
                        />{" "}
                        <CountryCards
                            flag={data.flag}
                            name={data.name}
                            population={data.population}
                            region={data.region}
                            capital={data.capital}
                        />
                    </div>
                );

                setCountry(country);
            }
        },
        [allCountries, error]
    );

    return <>{country}</>;
}
