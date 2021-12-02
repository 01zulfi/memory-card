import React, { useEffect, useState } from "react";
import { balls } from "../Balls";
import "../styles/BallSection.css";

const BallSection = ({ score }) => {
  const [fourBalls, setFourBalls] = useState(balls.getFourRandom());

  const toggleFailureBorder = (element) => {
    element.classList.add("clicked-twice");
  };

  const clickedTwice = (event) => {
    score.failure();
    toggleFailureBorder(event.currentTarget);
    balls.setAllClickedFalse();
    event.currentTarget.parentNode.classList.add("clicked-twice");

    setTimeout(() => {
      setFourBalls(balls.getFourRandom());
    }, 1500);
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

  useEffect(() => {
    const clickedTwiceElements = document.querySelectorAll(".clicked-twice");
    [...clickedTwiceElements].forEach((el) =>
      el.classList.remove("clicked-twice")
    );
  }, [fourBalls]);

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
          <img alt={ball.name} src={ball.imgSrc} />
          <p>{ball.name}</p>
        </div>
      ))}
    </section>
  );
};

export default BallSection;
