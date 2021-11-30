import americanFootballImg from "./images/american-football.png";
import baseballImg from "./images/baseball.png";
import basketballImg from "./images/basketball.png";
import beachballImg from "./images/beachball.png";
import billiardBallImg from "./images/billiard-ball.png";
import bowlingBallImg from "./images/bowling-ball.png";
import cricketBallImg from "./images/cricket-ball.png";
import curlingBallImg from "./images/curling-ball.png";
import footballImg from "./images/football.png";
import golfBallImg from "./images/golf-ball.png";
import pingpongBallImg from "./images/pingpong-ball.png";
import rugbyBallImg from "./images/rugby-ball.png";
import squashBallImg from "./images/squash-ball.png";
import tennisBallImg from "./images/tennis-ball.png";
import volleyballImg from "./images/volleyball.png";

const uniqueId = () =>
  Math.floor(Math.random() * Date.now() + Math.random() * 1000);

const checkForDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr.filter((el) => el === arr[i]);
    if (temp.length > 1) return true;
  }
  return false;
};

const Ball = (name, imgSrc) => {
  let clicked = false;
  return {
    get name() {
      return name;
    },
    get imgSrc() {
      return imgSrc;
    },
    id: uniqueId(),
    get clicked() {
      return clicked;
    },
    setClickedTrue() {
      clicked = true;
    },
    setClickedFalse() {
      clicked = false;
    },
  };
};

const BallManager = () => {
  let balls = [];

  const add = (...ball) => {
    balls = [...balls, ...ball];
  };

  const areAllBallsClicked = () => balls.every((ball) => ball.clicked);

  const getFourRandom = () => {
    if (areAllBallsClicked()) return [];

    const firstNum = Math.floor(Math.random() * 15);
    const secondNum = Math.floor(Math.random() * 15);
    const thirdNum = Math.floor(Math.random() * 15);
    const fourthNum = Math.floor(Math.random() * 15);

    if (checkForDuplicate([firstNum, secondNum, thirdNum, fourthNum])) {
      return getFourRandom();
    }

    const fourRandomBalls = [
      balls[firstNum],
      balls[secondNum],
      balls[thirdNum],
      balls[fourthNum],
    ];

    if (fourRandomBalls.every((ball) => ball.clicked)) {
      return getFourRandom();
    }

    return fourRandomBalls;
  };

  const find = (id) => {
    return balls.find((ball) => ball.id === id);
  };

  const setAllClickedFalse = () => {
    balls.forEach((ball) => ball.setClickedFalse());
  };

  return {
    add,
    getFourRandom,
    find,
    setAllClickedFalse,
    //for testing
    get IDs() {
      return balls.map((ball) => ball.id);
    },
  };
};

const balls = BallManager();

balls.add(
  Ball("American Football", americanFootballImg),
  Ball("Baseball", baseballImg),
  Ball("Basketball", basketballImg),
  Ball("Beachball", beachballImg),
  Ball("Billiard Ball", billiardBallImg),
  Ball("Bowling Ball", bowlingBallImg),
  Ball("Cricket Ball", cricketBallImg),
  Ball("Curling Ball", curlingBallImg),
  Ball("Football", footballImg),
  Ball("Golf Ball", golfBallImg),
  Ball("Ping Pong Ball", pingpongBallImg),
  Ball("Rugby Ball", rugbyBallImg),
  Ball("Squash Ball", squashBallImg),
  Ball("Tennis Ball", tennisBallImg),
  Ball("Volleyball", volleyballImg)
);

export { balls };
