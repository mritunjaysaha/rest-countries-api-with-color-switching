import React from "react";
import BorderCountries from "./BorderCountries";

export default function CountryDetails(props) {
    return (
        <div className="country-details">
            <div className="flag">
                <img src={props.flag} alt="" />
            </div>
            <div className="contents-container">
                <h3>{props.name}</h3>
                <div className="contents">
                    <div className="contents-left">
                        <p>
                            Native Name: <span>{props.nativeName}</span>
                        </p>
                        <p>
                            Population: <span>{props.population}</span>
                        </p>
                        <p>
                            Region: <span>{props.region}</span>
                        </p>
                        <p>
                            Sub Region: <span>{props.subRegion}</span>
                        </p>
                        <p>
                            Capital: <span>{props.capital}</span>
                        </p>
                    </div>
                    <div className="contents-right">
                        <p>
                            Top Level Domain:{" "}
                            <span>{props.topLevelDomain}</span>
                        </p>
                        <p>
                            Currencies: <span>{props.currencies[0].name}</span>
                        </p>
                        <p>
                            Languages:{" "}
                            <span>
                                {props.languages.map((lang) => lang.name + " ")}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="border-countries">
                    <p>
                        {console.log("borders", props.border)}
                        Border Countries:{" "}
                        <span>
                            <BorderCountries countries={props.border} />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
