import React from "react";

export default function CountryCards(props) {
    console.log("props", props);
    console.log("here");

    return (
        <div className="cards">
            <img src={props.flag} alt={props.name} />
            <div className="cards-contents">
                <h3>{props.name}</h3>
                <p>
                    Population: <span>{props.population}</span>
                </p>
                <p>
                    Region: <span>{props.region}</span>
                </p>
                <p>
                    Capital: <span>{props.capital}</span>
                </p>
            </div>
        </div>
    );
}