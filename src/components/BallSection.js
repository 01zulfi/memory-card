import React, { useState } from "react";
import { balls } from "../Balls";

const BallSection = ({ score }) => {
  const [fourBalls, setFourBalls] = useState(balls.getFourRandom());

  const toggleFailureBorder = (element) => {
    element.style.border = "2px solid red";
  };

  const setBallClicked = (id, event) => {
    const targetBall = balls.find(id);

    if (targetBall.clicked) {
      score.failure();
      toggleFailureBorder(event.target);
      balls.setAllClickedFalse();
      setTimeout(() => {
        setFourBalls(balls.getFourRandom());
      }, 1000);
      return;
    }

    setFourBalls(balls.getFourRandom());
    score.success();
    targetBall.setClickedTrue();
  };

  const clickHandler = (event) => {
    const id = Number(event.target.getAttribute("data-id"));
    setBallClicked(id, event);
  };

  return (
    <section className="ball-section">
      {fourBalls.map((ball) => (
        <div
          data-id={ball.id}
          className="ball-div"
          onClick={clickHandler}
          key={ball.id}
        >
          {ball.name}
        </div>
      ))}
    </section>
  );
};

export default BallSection;
