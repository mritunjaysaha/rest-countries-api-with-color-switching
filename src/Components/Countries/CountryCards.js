import React from "react";

export default function CountryCards(props) {
    return (
        <div className="cards">
            <div>
                <img src={props.flag} alt={props.name} />
            </div>
            <div className="cards-contents">
                <h3 className="name">{props.name}</h3>
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
