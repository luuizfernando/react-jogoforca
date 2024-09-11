import alfabeto from "../alfabeto";

export default function Letras({letrasUsadas, clicarLetra}) {
    return (
        <div>
            <div className="container-letras">
                {alfabeto.map((l) => <button key={l} disabled={letrasUsadas.includes(l)} onClick={() => clicarLetra(l)}>{l}</button>)}
            </div>
        </div>
    )
}