
import dice from "./images/icon-dice.svg"
import "./App.scss";
import { useEffect, useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [ advice, setAdvice ] = useState('')

  const getAdvice = async() => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${Math.round(Math.random()*224)}`)
      const data = await res.json()
      setAdvice(data.slip)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getAdvice(), [setAdvice])

if(isLoading){
  return(
    <main>
     <div className="col-3">
        <div className="snippet" data-title=".dot-windmill">
          <div className="stage">
            <div className="dot-windmill"></div>
          </div>
        </div>
      </div>
  </main>
  )
}

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
