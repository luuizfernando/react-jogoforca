export default function Chute({ textoInput, setTextoInput, desabilitarInput, chutarPalavra }) {
    return (

        <div className="container-input">
            <span>Já sei a palavra!</span>
            <input
                disabled={desabilitarInput}
                value={textoInput}
                onChange={(e) => setTextoInput(e.target.value)}
            />
            <button
                onClick={chutarPalavra}
            >Chutar</button>
        </div>

    )
}