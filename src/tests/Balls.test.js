import { balls } from "../Balls";

const allIDs = balls.IDs;

test("can get four random balls", () => {
  const fourBalls = balls.getFourRandom();
  expect(fourBalls.length).toBe(4);
});

test("can get four unique balls", () => {
  const checkForDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const temp = arr.filter((el) => el === arr[i]);
      if (temp.length > 1) return true;
    }
    return false;
  };

  const fourBalls = balls.getFourRandom();
  const ids = fourBalls.map((ball) => ball.id);
  const names = fourBalls.map((ball) => ball.name);

  expect(checkForDuplicate(names)).toBe(false);
  expect(checkForDuplicate(ids)).toBe(false);
});

test("gets atleast one not clicked ball", () => {
  for (let i = 0; i < 14; i++) {
    balls.find(allIDs[i]).setClickedTrue();
  }

  const fourBalls = balls.getFourRandom();
  const flag = fourBalls.every((ball) => ball.clicked);
  const name = balls.find(allIDs[14]).name;

  expect(name).toMatch(/Billiard Ball/);
  expect(flag).toBe(false);
});

test("returns empty array if all balls clicked", () => {
  balls.find(allIDs[14]).setClickedTrue();

  const fourBalls = balls.getFourRandom();
  expect(fourBalls).toEqual([]);
});

test("sets all clicked to false", () => {
  let flag1;
  for (let i = 0; i < 15; i++) {
    if (balls.find(allIDs[i]).clicked) {
      flag1 = true;
    } else {
      flag1 = false;
      break;
    }
  }
  expect(flag1).toBe(true);

  balls.setAllClickedFalse();
  let flag2;
  for (let i = 0; i < 15; i++) {
    if (balls.find(allIDs[i]).clicked) {
      flag2 = true;
      break;
    } else {
      flag2 = false;
    }
  }
  expect(flag2).toBe(false);
});
