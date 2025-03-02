import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../test-utils";
import GitButton from "../gitbutton";

describe("GitButton", () => {
  test("renders without crashing", () => {
    render(<GitButton />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  test("has correct href attribute", () => {
    render(<GitButton />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/cjrace/wedding-race",
    );
  });

  test("has correct aria-label attribute", () => {
    render(<GitButton />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "aria-label",
      "Open GitHub repository in a new tab",
    );
  });

  test("renders GitHub icon", () => {
    render(<GitButton />);
    expect(screen.getByTestId("github-button")).toBeInTheDocument();
  });
});
