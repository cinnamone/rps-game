import React, { useState } from "react"
import "./index.css" 

const MOVES = ["rock", "paper", "scissors"]
const EMOJI = { rock: "✊", paper: "✋", scissors: "✌️" }

export default function App() {
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [result, setResult] = useState("")

  const getComputerMove = () => {
    return MOVES[Math.floor(Math.random() * MOVES.length)]
  }

  const determineWinner = (user, computer) => {
    if (user === computer) return "draw"
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "win"
    }
    return "lose"
  }

  const handlePlay = (move) => {
    const computer = getComputerMove()
    const outcome = determineWinner(move, computer)

    if (outcome === "win") {
      setUserScore(prevScore => prevScore + 1)
      setResult("You win")
    } else if (outcome === "lose") {
      setComputerScore(prevScore => prevScore + 1)
      setResult("You lose")
    } else {
      setResult("It's a draw")
    }
  }

  const resetGame = () => {
    setUserScore(0)
    setComputerScore(0)
    setResult("")
  }

  return (
    <main className="container">
      <h1 className="title">Rock Paper Scissors</h1>

      <div className="score-container">
        <div className="score-box">
          <div className="score-label">Your Score</div>
          <div className="score-number">{userScore}</div>
        </div>
        <div className="score-box">
          <div className="score-label">Computer Score</div>
          <div className="score-number">{computerScore}</div>
        </div>
      </div>

      <div className="result-container">
        <div className="result-text">{result || "Pick your move"}</div>
        <div className="button-container">
          <button
            onClick={() => handlePlay("rock")}
            className="emoji-button"
          >
            {EMOJI.rock}
          </button>
          <button
            onClick={() => handlePlay("paper")}
            className="emoji-button"
          >
            {EMOJI.paper}
          </button>
          <button
            onClick={() => handlePlay("scissors")}
            className="emoji-button"
          >
            {EMOJI.scissors}
          </button>
        </div>
      </div>

      <button
        onClick={resetGame}
        className="reset-button"
      >
        Reset Game
      </button>
    </main>
  )
}