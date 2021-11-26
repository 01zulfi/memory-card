import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="current-score-div">
        <p>Current Score</p>
        <p>{currentScore}</p>
      </div>
      <div className="best-score-div">
        <p>Best Score</p>
        <p>{bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
