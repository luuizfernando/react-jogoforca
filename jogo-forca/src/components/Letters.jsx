import React from "react";
import { useState } from "react";
import "../styles/style.css"

export default function Letters() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alfabetoMaiusculo = alfabeto.map((i) => i.toUpperCase())
    const primeiraLinha = alfabetoMaiusculo.slice(0, 13); // A-M
    const segundaLinha = alfabetoMaiusculo.slice(13); // N-Z

    // const [isDisabled, setIsDesabled] = useState(true);


    return (

        <>
            <div>
                {primeiraLinha.map((l) =>
                    <button className="letters-button-abled">{l}</button>
                )}
            </div>

            <div>
                {segundaLinha.map((l) =>
                        <button className="letters-button-abled">{l}</button>
                )}
            </div>
        </>

    )

}