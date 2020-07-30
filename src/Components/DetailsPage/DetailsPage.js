import React from "react";
import useCountryDetails from "../CustomHooks/countryDetails";
export default function DetailsPage(props) {
    const [details, error] = useCountryDetails(props.location.state.name);

    return <>Details Page</>;
}
