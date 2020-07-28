import { useEffect, useState } from "react";

export default function useCountriesData() {
    const [countries, setCountries] = useState();

    useEffect(function () {
        async function getCountries() {
            const response = await fetch(
                "https://restcountries.eu/rest/v2/all"
            );
            const processedResponse = await response.json();

            console.log({ processedResponse });

            setCountries(processedResponse);
        }
        getCountries();
    }, []);

    return countries;
}
