import React from "react";
import "./card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgUrl} alt="img" />
            <span className="card-text">{props.text}</span>
        </div>
    );
};

export default Card;
