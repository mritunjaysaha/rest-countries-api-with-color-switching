import { useEffect, useState } from "react";

export default function useFilteredData(region) {
    const [countries, setCountries] = useState();
    const [error, setError] = useState(true);

    useEffect(
        function () {
            async function getCountries() {
                const response = await fetch(
                    `https://restcountries.eu/rest/v2/region/${region}`
                );
                const processedResponse = await response.json();
                setCountries(processedResponse);
                setError(false);
                console.log("region", processedResponse);
            }

            getCountries();
        },
        [region]
    );

    return [countries, error];
}
