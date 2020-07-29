import { useEffect, useState } from "react";

export default function useCountriesData(query, region) {
    const [countries, setCountries] = useState();
    const [error, setError] = useState(true);
    const text = query ? "name/" + query : "all";
    useEffect(
        function () {
            async function getCountries() {
                let response = region
                    ? `https://restcountries.eu/rest/v2/region/${text}`
                    : await fetch(`https://restcountries.eu/rest/v2/${text}`);
                const processedResponse = await response.json();
                console.log(processedResponse);
                setCountries(processedResponse);
                setError(false);
            }
            getCountries();
        },
        [text, region]
    );

    return [countries, error];
}
