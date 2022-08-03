import React from "react";
import './TodoSearch.css'

function TodoSearch() {
    return(
        <React.Fragment>
            <input className="input-buscar" type="text" placeholder='Buscar'/>
        </React.Fragment>
    );
}

export {TodoSearch};