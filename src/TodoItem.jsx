import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    return(
        <li className="TodoItem">
            <span className="container">
                <input type="checkbox" />
            </span>
            <p className="">
            {props.text}
            </p>
            <span className="btn-x">
            X
            </span>
        </li>
    );
}

export {TodoItem};