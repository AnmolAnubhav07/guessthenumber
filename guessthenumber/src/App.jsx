import { useState } from "react";
import "./App.css";

function App() {

  const [number] = useState(Math.floor(Math.random()*100)+1);
  const [guess,setGuess] = useState("");
  const [message,setMessage] = useState("  ");
  const [tries,setTries] = useState(10);

  const checkGuess = () => {

    if(tries <= 0){
      setMessage("You Lose!");
      return;
    }

    const userGuess = Number(guess);

    if(!userGuess){
      setMessage("Enter a number");
      return;
    }

    const remaining = tries - 1;
    setTries(remaining);

    if(userGuess === number){
      setMessage("Correct! You found it!");
    }
    else if(remaining === 0){
      setMessage("You Lose!");
    }
    else if(userGuess > number){
      setMessage("High, Think LOWER.");
    }
    else{
      setMessage("Low, Think HIGHER.");
    }

    setGuess("");
  }

  return (

    <div className="container">

      <div className="box">

        <h1>GUESS THE NUMBER</h1>

        <p className="subtitle">
        The number chosen by the computer from 1 to 100.
        </p>

        <p className="tries">
        Chances Left: {tries}
        </p>

        <input
        type="number"
        value={guess}
        placeholder="Enter your guess..."
        onChange={(e)=>setGuess(e.target.value)}
        disabled={tries === 0 || message.includes("Correct")}
        />

        <button
        onClick={checkGuess}
        disabled={tries === 0 || message.includes("Correct")}
        >
        SUBMIT
        </button>

        <p className={
          message.includes("Correct")
          ? "message win"
          : message.includes("Lose")
          ? "message lose"
          : "message"
        }>
        {message}
        </p>

      </div>

    </div>

  )
}

export default App