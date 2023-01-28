import React from 'react'

//import de diseños 
import { Flyers } from '../../data/flyer'

import './styles.css'

function Home() {

    //view structure
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1 className="title"> Juego de Reciclaje ING WEB</h1>
                    
                    <p className="description">
                    El reciclaje es un proceso mediante el cual los materiales usados o desechados son recolectados, procesados y transformados en nuevos productos.
                    Para esto necesitamos saber las distintas simbologías (colores) de manejo de desperdicios:
                    </p>
                    <p><br></br></p>
                    

                    <div className="flyer-container">
                        {Flyers && Flyers.map((flyer, index) =>
                            <div key={index} className="flyer-item-container">
                                <img className="flyer-header" src={flyer.header} alt="header flyer" />
                                <p className={`flyer-text ${flyer.style}`}>{flyer.text}</p>
                                <img className="flyer-body" src={flyer.body} alt="body flyer" />
                            </div>
                        )}
                    </div>
                    <p className="description">
                    El juego consiste en acertar correctamente los desperdicios en el basurero correspondiente
                    </p>
                    <a className="btn-primary" href="/game">Jugar</a>
                </div>
            </div >
        </>
    )
}

export default Home
