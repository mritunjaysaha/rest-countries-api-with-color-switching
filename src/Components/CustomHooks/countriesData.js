import { useEffect, useState } from "react";

export default function useCountriesData(query) {
    const [countries, setCountries] = useState();
    const [error, setError] = useState(true);
    const text = query ? "name/" + query : "all";
    useEffect(
        function () {
            async function getCountries() {
                const response = await fetch(
                    `https://restcountries.eu/rest/v2/${text}`
                );
                const processedResponse = await response.json();
                console.log(processedResponse);
                setCountries(processedResponse);
                setError(false);
            }
            getCountries();
        },
        [text]
    );

    return [countries, error];
}
