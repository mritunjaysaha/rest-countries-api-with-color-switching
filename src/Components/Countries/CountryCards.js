import React from "react";
import { navigate } from "@reach/router";
import Fade from "react-reveal/Fade";

export default function CountryCards(props) {
    return (
        <Fade bottom duration={800}>
            <div
                className="cards"
                onClick={() => {
                    navigate("/details", { state: { name: `${props.name}` } });
                }}
            >
                <div className="cards-flag">
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
        </Fade>
    );
}
