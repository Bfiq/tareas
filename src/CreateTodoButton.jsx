import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <React.Fragment>
            <button className="btn-create">Agregar Tarea</button>
        </React.Fragment>
    );
}

export {CreateTodoButton};