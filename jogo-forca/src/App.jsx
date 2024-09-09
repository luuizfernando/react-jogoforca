import React from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import "./styles/style.css"

export default function App() {
  return (
    <>

      <div className="upper-game">
        <Game />
      </div>

      <div className="bottom-game">
        <Letters />
      </div>

    </>
  )
}