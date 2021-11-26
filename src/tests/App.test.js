import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("App renders", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("App");
});

test("header renders", () => {
  const { container } = render(<App />);
  const header = container.querySelector(".header");
  expect(header).toBeInTheDocument();
});
