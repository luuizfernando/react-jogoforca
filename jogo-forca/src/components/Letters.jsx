import React from "react";
import "../styles/style.css"

export default function Letters() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const primeiraLinha = alfabeto.slice(0, 13); // Letras A-M
    const segundaLinha = alfabeto.slice(13); // Letras N-Z


    return (

        <>
            <div>
                {primeiraLinha.map((l) =>
                    <button className="letters-button">{l}</button>
                )}
            </div>

            <div>
                {segundaLinha.map((l) =>
                        <button className="letters-button">{l}</button>
                )}
            </div>
        </>

    )

}