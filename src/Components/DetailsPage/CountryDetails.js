import React, { useEffect, useState, lazy, Suspense } from "react";
import LoadingSkeletonBorderCountries from "./LoadingSkeletonBorderCountries";

const BorderCountries = lazy(() => import("./BorderCountries"));

export default function CountryDetails(props) {
    const languages = props.languages;
    const [lang, setLang] = useState();
    useEffect(
        function () {
            let str = "";
            for (let i = 0; i < languages.length; i++) {
                if (i !== languages.length - 1) {
                    str += languages[i].name + ", ";
                } else {
                    str += languages[i].name;
                }
            }
            setLang(str);
        },
        [languages]
    );
    return (
        <div className="country-details">
            <img className="flag" src={props.flag} alt="" />
            <div className="country-contents-container">
                <h3 className="country-name">{props.name}</h3>
                <div className="country-details-contents">
                    <div className="contents-left">
                        <p>
                            Native Name:{" "}
                            <span>{props.nativeName || "none"}</span>
                        </p>
                        <p>
                            Population:{" "}
                            <span>{props.population || "none"}</span>
                        </p>
                        <p>
                            Region: <span>{props.region || "none"}</span>
                        </p>
                        <p>
                            Sub Region: <span>{props.subRegion || "none"}</span>
                        </p>
                        <p>
                            Capital: <span>{props.capital || "none"}</span>
                        </p>
                    </div>
                    <div className="contents-right">
                        <p>
                            Top Level Domain:{" "}
                            <span>{props.topLevelDomain || "none"}</span>
                        </p>
                        <p>
                            Currencies:{" "}
                            <span>{props.currencies[0].name || "none"}</span>
                        </p>
                        <p>
                            Languages: <span>{lang}</span>
                        </p>
                    </div>
                </div>
                <div className="border-countries">
                    <p>
                        Border Countries:&nbsp;&nbsp;
                        <span>
                            <Suspense
                                fallback={<LoadingSkeletonBorderCountries />}
                            >
                                <BorderCountries countries={props.border} />
                            </Suspense>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
