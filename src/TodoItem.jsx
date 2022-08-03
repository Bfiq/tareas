import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    return(
        <li className="Item">
            <span className="checkmark">C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem};