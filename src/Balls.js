const uniqueId = () =>
  Math.floor(Math.random() * Date.now() + Math.random() * 1000);

const checkForDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr.filter((el) => el === arr[i]);
    if (temp.length > 1) return true;
  }
  return false;
};

const Ball = (name) => {
  let clicked = false;
  return {
    get name() {
      return name;
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
  Ball("American Football"),
  Ball("Baseball"),
  Ball("Basketball"),
  Ball("Beachball"),
  Ball("Bowling Ball"),
  Ball("Cricket Ball"),
  Ball("Curling Ball"),
  Ball("Football"),
  Ball("Ping Pong Ball"),
  Ball("Rugby Ball"),
  Ball("Squash Ball"),
  Ball("Tennis Ball"),
  Ball("Volleyball"),
  Ball("Golf Ball"),
  Ball("Billiard Ball")
);

export { balls };
