import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("App renders", () => {
  const { container } = render(<App />);

  screen.debug();

  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("App");
});

test("header renders", () => {
  const { container } = render(<App />);
  const header = container.querySelector(".header");
  expect(header).toBeInTheDocument();
});

test("scoreboard renders", () => {
  const { container } = render(<App />);
  const scoreboard = container.querySelector(".scoreboard");
  expect(scoreboard).toBeInTheDocument();
});

test("ball section renders", () => {
  const { container } = render(<App />);
  const ballSection = container.querySelector(".ball-section");
  expect(ballSection).toBeInTheDocument();
});
