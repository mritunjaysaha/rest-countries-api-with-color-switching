import { useEffect, useState } from "react";

export default function useCountriesData() {
    const [countries, setCountries] = useState();
    const [error, setError] = useState(true);
    useEffect(function () {
        async function getCountries() {
            const response = await fetch(
                "https://restcountries.eu/rest/v2/all"
            );
            const processedResponse = await response.json();
            setCountries(processedResponse);
            setError(false);
        }
        getCountries();
    }, []);

    return [countries, error];
}
