import React, { useState } from "react";
import { balls } from "../Balls";

const BallSection = ({ score }) => {
  const [fourBalls, setFourBalls] = useState(balls.getFourRandom());

  const toggleFailureBorder = (element) => {
    element.style.border = "2px solid red";
  };

  const clickedTwice = (event) => {
    score.failure();
    toggleFailureBorder(event.target);
    balls.setAllClickedFalse();
    document.body.style.pointerEvents = "none";

    setTimeout(() => {
      setFourBalls(balls.getFourRandom());
    }, 1000);
  };

  const setBallClicked = (id, event) => {
    const targetBall = balls.find(id);

    if (targetBall.clicked) {
      clickedTwice(event);
      return;
    }

    score.success();
    targetBall.setClickedTrue();
    setFourBalls(balls.getFourRandom());
  };

  const clickHandler = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    setBallClicked(id, event);
  };

  const style = {
    width: "30px",
  };

  return (
    <section className="ball-section">
      {fourBalls.map((ball) => (
        <div
          data-id={ball.id}
          data-clicked={ball.clicked}
          className="ball-div"
          onClick={clickHandler}
          key={ball.id}
        >
          <img style={style} alt={ball.name} src={ball.imgSrc} />
          {ball.name}
        </div>
      ))}
    </section>
  );
};

export default BallSection;
