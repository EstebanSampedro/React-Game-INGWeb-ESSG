import React from 'react'

//Imagen de cada tipo de basurero con su respectivo color + onclick function
function Card({ card, onclickHandler }) {
    return (
        <img className="card" src={card?.image} alt="my Card" onClick={() => onclickHandler(card?.category)} />)
}

export default Card
