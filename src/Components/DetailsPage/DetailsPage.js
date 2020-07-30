import React, { useState, useEffect } from "react";
import useCountryDetails from "../CustomHooks/countryDetails";
import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";
export default function DetailsPage(props) {
    const [details, error] = useCountryDetails(props.location.state.name);
    const [data, setData] = useState("");
    const [country, setCountry] = useState();
    useEffect(
        function () {
            if (error) {
                console.log("here");
                setData(details);
            }
        },
        [details, error]
    );

    useEffect(
        function () {
            if (data) {
                console.log(data[0]);
                const countryDetails = (
                    <CountryDetails
                        flag={data[0].flag}
                        name={data[0].name}
                        nativeName={data[0].nativeName}
                        population={data[0].population}
                        region={data[0].region}
                        subRegion={data[0].subregion}
                        capital={data[0].capital}
                        topLevelDomain={data[0].topLevelDomain}
                        currencies={data[0].currencies}
                        languages={data[0].languages}
                        border={data[0].borders}
                    />
                );

                setCountry(countryDetails);
            }
        },
        [data]
    );

    return (
        <>
            <div className="details-page">
                <BackButton />
                {country}
            </div>
        </>
    );
}
