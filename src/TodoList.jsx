import React from "react";
import './TodoList.css';

function TodoList(props) {
    return(
        <div>
            {props.children}
        </div>
    );
}

export {TodoList};