import React from "react";
import useCountryDetails from "../CustomHooks/countryDetails";
import BackButton from "./BackButton";

export default function DetailsPage(props) {
    const [details, error] = useCountryDetails(props.location.state.name);

    return (
        <>
            <div className="details-page">
                <BackButton />
            </div>
        </>
    );
}
