import React from "react";
import { useState } from "react";
import forca0 from "../assets/forca0.png";
// import forca1 from "../assets/forca1.png";
// import forca2 from "../assets/forca2.png";
// import forca3 from "../assets/forca3.png";
// import forca4 from "../assets/forca4.png";
// import forca5 from "../assets/forca5.png";
// import forca6 from "../assets/forca6.png";
import palavras from "../utils/palavras";
import "../styles/style.css"

export default function Game() {

    const [palavraForca, setPalavraForca] = useState("");

    function startGame() {
        const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
        setPalavraForca(palavraSorteada);
        const underlines = palavraSorteada.split("").map(() => " _ ");
        setPalavraForca(underlines);
    }


    return (

        <>

            <div className="upper-container">
                <img src={forca0} alt="Imagem da forca do jogo" className="imagem-forca" />
            </div>

            <div className="upper-container-direita">
                <div>
                    <button className="word-button" onClick={startGame}>Escolher Palavra</button>
                </div>
                <div>{palavraForca}</div>
            </div>

        </>

    )

}