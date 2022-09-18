
import dice from "./images/icon-dice.svg"
import "./App.scss";
import { useEffect, useState } from "react";

function App() {


  const [ advice, setAdvice ] = useState('')

  const getAdvice = async() => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${Math.round(Math.random()*224)}`)
      const data = await res.json()
      setAdvice(data.slip)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getAdvice, [])



  return (
    <div className="App">
    <main>
      <div className="container">
        <h3>ADVICE #{advice.id}</h3>
        <h1>{`“${advice.advice}”`}</h1>
        <div className="divider"></div>
        <div className="diceContainer">
          <img src={dice} alt="dice" onClick={getAdvice}/>
        </div>
      </div>
    </main>
      <footer>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://erickfelix.netlify.app/" target="_black" rel="noreferrer">Erick Felix</a>.
      </footer>
    </div>
  );
}

export default App;
