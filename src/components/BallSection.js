import React, { useState } from "react";
import { balls } from "../Balls";

const BallSection = () => {
  const [fourBalls, setFourBalls] = useState(balls.getFourRandom());

  const clickHandler = () => {
    setFourBalls(balls.getFourRandom());
  };

  return (
    <section className="ball-section">
      {fourBalls.map((ball) => (
        <div onClick={clickHandler} key={ball.id}>
          {ball.name}
        </div>
      ))}
    </section>
  );
};

export default BallSection;
