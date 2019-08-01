import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Estados: Entrada, Rodando, Fim
// chute de 0 à 300
//quantos palpites

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  //palpite da maquina
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMax(300);
    setMin(0);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Jogar novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App elemento="DevPleno" />, rootElement);
