import React from "react";
import { screen, render } from "@testing-library/react";
import BallSection from "../components/BallSection";

test("renders ball section", () => {
  expect(render(<BallSection />)).toMatchSnapshot();
  screen.debug();
});
