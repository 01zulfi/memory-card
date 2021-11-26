import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

test("header renders", () => {
  expect(render(<Header />)).toMatchSnapshot();
});

test("header renders correct title", () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Memory Card/)).toBeInTheDocument();
});
