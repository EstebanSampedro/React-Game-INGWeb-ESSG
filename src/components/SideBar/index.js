import React from 'react'

import './style.css'

//component Sidebar render image and a score, use a props for onclick function and set a score
function SideBar({ garbage, score, onclickHandler }) {

    return (
        <div className="side-container">
            <p className="description">
                ¿A qué basurero corresponde el siguiente desperdicio?
            </p>
            <img src={garbage?.image} alt="Trash" className="random-image" />
            <h3 className="score"> Puntaje: {`${score}`}</h3>
            <button className="btn-primary btn" onClick={() => onclickHandler()}>Terminar Juego</button>
        </div>
    )
}

export default SideBar
