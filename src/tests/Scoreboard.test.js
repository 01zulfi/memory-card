import React from "react";
import Scoreboard from "../components/Scoreboard";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("scoreboard renders", () => {
  const { container } = render(<Scoreboard />);
  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("scoreboard");
});

test("scoreboard renders correct values", () => {
  const { getByText } = render(<Scoreboard currentScore={2} bestScore={5} />);
  const currentScore = getByText("2");
  const bestScore = getByText("5");

  expect(currentScore).toBeInTheDocument();
  expect(currentScore.parentNode).toHaveClass("current-score-div");
  expect(bestScore).toBeInTheDocument();
  expect(bestScore.parentNode).toHaveClass("best-score-div");
});
