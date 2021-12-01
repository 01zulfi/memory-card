import React, { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import BallSection from "./components/BallSection";

function App() {
  const [score, setScore] = useState({ current: 0, best: 0 });

  const scoreManager = () => {
    let currentScore = score.current;
    let bestScore = score.best;

    const setBestScore = () => {
      if (currentScore > bestScore) {
        bestScore = currentScore;
        return;
      }
    };

    return {
      success() {
        currentScore++;
        setBestScore();
        setScore({ current: currentScore, best: bestScore });
      },
      failure() {
        currentScore = 0;
        setScore({ current: currentScore, best: bestScore });
      },
    };
  };

  const WinnerDiv = () => {
    return <div>Congratulations, you beat the game!</div>;
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard currentScore={score.current} bestScore={score.best} />
      <BallSection score={scoreManager()} />
      {score.current === 15 && WinnerDiv()}
    </div>
  );
}

export default App;
