import React from "react";
import "../styles/Scoreboard.css";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="current-score-div">
        <p className="score-heading">Current Score</p>
        <p className="score-display">{currentScore}</p>
      </div>
      <div className="best-score-div">
        <p className="score-heading">Best Score</p>
        <p className="score-display">{bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
