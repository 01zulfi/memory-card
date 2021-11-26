import React from "react";
import { ballsCopy as balls } from "../Balls";

const BallSection = () => {
  return (
    <section className="ball-section">
      {balls.map((ball) => (
        <div key={ball.id}>{ball.name}</div>
      ))}
    </section>
  );
};

export default BallSection;
