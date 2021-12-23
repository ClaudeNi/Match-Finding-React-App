import React from "react";
import "./counter.css";

const Counter = (props) => {
    return (
        <div className="counter">
            {props.icon} {props.counter}
        </div>
    );
};

export default Counter;
