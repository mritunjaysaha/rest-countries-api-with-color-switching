import { useState, useEffect } from "react";

export default function useCountryDetails(country = "India") {
    const [details, setDetails] = useState();
    const [error, setError] = useState(true);

    useEffect(
        function () {
            async function getDetails() {
                const response = await fetch(
                    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
                );
                const processedResponse = await response.json();
                setDetails(processedResponse);
                setError(false);
            }

            getDetails();
        },
        [country]
    );

    return [details, error];
}
