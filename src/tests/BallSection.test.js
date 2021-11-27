import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import BallSection from "../components/BallSection";

test("renders ball section", () => {
  const { container } = render(<BallSection />);
  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("ball-section");
});

test("re-renders ball divs", () => {
  const { container } = render(<BallSection />);
  expect(container).toMatchSnapshot();
  screen.debug();

  const div = container.querySelector("div");
  userEvent.click(div);
  screen.debug();
  expect(container).toMatchSnapshot();
});
