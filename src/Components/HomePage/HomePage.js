import React, { useEffect } from "react";

export default function HomePage() {
    useEffect(function () {
        async function getCountries() {
            const response = await fetch(
                "https://restcountries.eu/rest/v2/all"
            );
            const processedResponse = await response.json();

            console.log({ processedResponse });
        }
        getCountries();
    });

    return <>Home Page</>;
}
