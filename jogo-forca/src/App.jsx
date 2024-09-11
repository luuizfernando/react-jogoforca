import React, { useState } from "react";
import palavras from "./palavras";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import alfabeto from "./alfabeto";


export default function App() {
  const [erros, setErros] = useState(0);
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [palavraJogo, setPalavraJogo] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto);
  const [corPalavra, setCorPalavra] = useState("preto");

  function iniciarJogo() {
    setErros(0);
    setLetrasUsadas([]);
    setCorPalavra("preto");
    sortearPalavra();
  }

  function finalizarJogo() {
    setPalavraJogo(palavraEscolhida);
    setLetrasUsadas(alfabeto);
  }

  function sortearPalavra() {
    const i = Math.floor( Math.random() * palavras.length );
    const palavra = palavras[i];
    const palavraArray = palavra.split("");
    setPalavraEscolhida(palavraArray);
    let underlines = [];
    palavraArray.forEach(() => underlines.push(" _"));
    setPalavraJogo(underlines);
  }

  function clicarLetra(letra) {
    setLetrasUsadas([...letrasUsadas, letra]);

    if( palavraEscolhida.includes(letra) ) {
      acertouLetra(letra)
    } else {
      errouLetra(letra)
    }
  }

  function acertouLetra(letra) {
    const novaPalavraJogo = [...palavraJogo];

    palavraEscolhida.forEach((l, i) => {
      if (l === letra) {
        novaPalavraJogo[i] = letra;
      }
    })

    setPalavraJogo(novaPalavraJogo);

    if(!novaPalavraJogo.includes(" _")) {
      setCorPalavra("verde")
      finalizarJogo();
    }
  }

  function errouLetra() {
    const novosErros = erros + 1;
    setErros(novosErros);

    if (novosErros === 6) {
      setCorPalavra("vermelho");
      finalizarJogo();
    }
  }

  return (
    <div className="container-tela">
      <Jogo 
        erros={erros}
        iniciarJogo={iniciarJogo}
        corPalavra={corPalavra}
        palavraJogo={palavraJogo}
      />
      <Letras 
        letrasUsadas={letrasUsadas}
        clicarLetra={clicarLetra}
      />
    </div>
  )
}