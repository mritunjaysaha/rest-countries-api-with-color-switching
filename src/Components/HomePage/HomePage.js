import React from "react";
import useCountriesData from "../CustomHooks/countriesData";

export default function HomePage() {
    const allCountries = useCountriesData();

    return <>Home Page</>;
}
