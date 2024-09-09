import React from "react";
import forcainicial from "../assets/forca0.png"
import "../styles/style.css"

export default function Game() {

    return (

        <>

            <div className="upper-container">
                <img src={forcainicial} alt="Imagem da forca do jogo"  className="imagem-forca"/>
            </div>

            <div className="upper-container">
                <button>Escolher Palavra</button>
            </div>

        </>

    )

}