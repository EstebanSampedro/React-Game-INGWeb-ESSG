
import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

//componentes
import Sidebar from '../../components/SideBar'
import Card from '../../components/Card'

//data imports
import { allGarbagesObjects } from '../../data/allGarbages'
import { CARDS } from '../../data/allCards'
import { generateArrayAndRandomize } from '../../utils/helpers'

//Lotties JSON imports
import correctAnimationData from '../../assets/clear.json'
import wrongAnimationData from '../../assets/banana-boy.json'
import sucessData from '../../assets/success.json'
import loserData from '../../assets/alert.json'
import dancingLoser from '../../assets/dancing.json'
import natureData from '../../assets/winners.json'

//import style
import './style.css'

function Game() {

    //estados de variables
    const [garbageList, setGarbageList] = useState([])
    const [garbage, setGarbage] = useState()
    const [garbageIndex, setGarbageIndex] = useState(0)
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [scoreTrue, setScoreTrue] = useState(0)
    const [scoreFalse, setScoreFalse] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [isTrue, setIsTrue] = useState(false)
    const [gameIsRunning, setGameIsRunning] = useState(true)

    //config lottie file
    const defaultOptionsNature = {
        loop: true,
        autoplay: true,
        animationData: natureData,

    };
    //config lottie file
    const defaultOptionsDancing = {
        loop: true,
        autoplay: true,
        animationData: dancingLoser,

    };
    //config lottie file
    const defaultOptionsCorrectAnswer = {
        loop: true,
        autoplay: true,
        animationData: correctAnimationData,

    };
    //config lottie file
    const defaultOptionsWrongAnswer = {
        loop: true,
        autoplay: true,
        animationData: loserData,

    };
    //config lottie file
    const defaultOptionsSucessResult = {
        loop: true,
        autoplay: true,
        animationData: sucessData,

    };
    //config lottie file
    const defaultOptionsLosenResult = {
        loop: true,
        autoplay: true,
        animationData: loserData,
    };

    //generacion aleatoria de la basura en la GUI
    useEffect(() => {
        setGarbageList(generateArrayAndRandomize(allGarbagesObjects))
        setIsDataLoaded(true)
    }, [])

    //Llamado al metodo de abajo si los datos han sido cargados
    useEffect(() => {
        selectImageGarbage()
    }, [isDataLoaded])


    // Seleccion de Imagen de Basurero
    const selectImageGarbage = () => {

        if (garbageIndex + 1 > garbageList.length - 1) {
            setGarbage(garbageList[0])
            setGarbageIndex(0)
        } else {
            setGarbage(garbageList[garbageIndex])
            setGarbageIndex(garbageIndex + 1)
        }

    }

    // Scores, resultados finales y endGame
    const checkAnswer = (category) => {
        if (category === garbage.category) {
            setScoreTrue(scoreTrue + 1)
            setIsTrue(true)
        } else {
            setIsTrue(false)
            setScoreFalse(scoreFalse + 1)
        }
        setShowResult(true)
        setTimeout(() => {
            selectImageGarbage()
            setShowResult(false)
            topFunction()
        }, 2000);
    }

    // go to results
    const endGame = () => {
        setGameIsRunning(false)
        topFunction()
    }

    //scrollTop
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //estructura visual
    return (
        <div className="container content-center">
            {gameIsRunning ? <>
                <div className="sidebar">
                    <Sidebar garbage={garbage} score={scoreTrue} onclickHandler={endGame} />
                </div>

                <div className="card-container">
                    {showResult &&
                        <Lottie className="lottieFile" options={isTrue ? defaultOptionsCorrectAnswer : defaultOptionsWrongAnswer}
                            height={"auto"}
                            width={"600px"}
                            isClickToPauseDisabled={true}
                        />}

                    {!showResult &&
                        CARDS.map((card, index) =>
                            <Card key={index} card={card} onclickHandler={checkAnswer} />
                        )
                    }

                </div>
            </>
                : <div className="result-container">
                    <h1 className="title">Resultado del Juego</h1>
                    <div className="result-content">
                        
                        <div className="result-counters">
                            <h3 className="counter correct-counter">Correcto: {scoreTrue}</h3>
                            <h3 className="counter wrong-counter">Incorrecto: {scoreFalse}</h3>
                            {scoreTrue > scoreFalse
                                ? <p className="result-text green">Buen trabajo, si sabes de reciclaje</p>
                                : <p className="result-text red">Obtuviste muchos errores, trata de nuevo!</p>

                            }
                            

                        </div>
                    </div>
                    <a className="btn-primary" href="/">Volver al Menu Principal</a>
                </div>
            }
        </div>
    )
}

export default Game
