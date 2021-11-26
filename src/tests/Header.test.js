import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

test("header renders", () => {
  expect(render(<Header />)).toMatchSnapshot();
  screen.getByRole("heading");
  screen.debug();
});

test("header renders correct title", () => {
  const { getByText, queryByText } = render(<Header />);
  expect(getByText(/Memory Card/)).toBeInTheDocument();
  expect(queryByText(/Memory Card/)).toBeInTheDocument();
});

test("header and h1 have correct class", () => {
  const { container, getByText } = render(<Header />);
  expect(container.firstChild).toHaveClass("header");
  expect(getByText(/Memory/)).toHaveClass("title");
});
