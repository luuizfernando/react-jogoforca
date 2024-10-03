import React, { useState } from "react";
import palavras from "./palavras";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import alfabeto from "./alfabeto";
import Chute from "./components/Chute";


export default function App() {
  const [erros, setErros] = useState(0);
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [palavraJogo, setPalavraJogo] = useState([]);
  const [letrasUsadas, setLetrasUsadas] = useState(alfabeto);
  const [corPalavra, setCorPalavra] = useState("preto");
  const [textoInput, setTextoInput] = useState("");
  const [desabilitarInput, setDesabilitarInput] = useState(true);

  function iniciarJogo() {
    setErros(0);
    setLetrasUsadas([]);
    setCorPalavra("preto"); 
    setTextoInput("");
    setDesabilitarInput(false);
    sortearPalavra();
  }

  function finalizarJogo() {
    setPalavraJogo(palavraEscolhida);
    setLetrasUsadas(alfabeto);
    setDesabilitarInput(true);
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

    if( desconsiderarAcentos(palavraEscolhida).includes(letra) ) {
      acertouLetra(letra)
    } else {
      errouLetra(letra)
    }
  }

  function acertouLetra(letra) {
    const novaPalavraJogo = [...palavraJogo];
    const palavraEscolhidaSemAcento = desconsiderarAcentos(palavraEscolhida);

    palavraEscolhida.forEach((l, i) => {
      if (l === letra) {
        novaPalavraJogo[i] = palavraEscolhida[i];
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

  function chutarPalavra() {
    let palavraString = "";
    palavraEscolhida.forEach((letra) => palavraString += letra);

    if (palavraString === textoInput) {
      setCorPalavra("verde");
    } else {
      setCorPalavra("vermelho");
      setErros(6)
    }
    finalizarJogo()
  }

  function desconsiderarAcentos(palavraArray) {
    let palavraString = "";
    palavraArray.forEach((letra) => palavraString += letra);

    return palavraString.replace("ç", "c").normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(""); 

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
      <Chute 
        textoInput={textoInput}
        setTextoInput={setTextoInput}
        desabilitarInput={desabilitarInput}
        chutarPalavra={chutarPalavra}
      />
    </div>
  )
}