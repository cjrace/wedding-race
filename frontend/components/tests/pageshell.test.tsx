import "@testing-library/jest-dom";
import Navbar, { pages } from "../pageshell";
import { render } from "../../test-utils";
import { screen } from "@testing-library/react";

describe("Navbar", () => {
  const renderNavbar = () => render(<Navbar>{undefined}</Navbar>);

  it("renders the navigation bar", () => {
    renderNavbar();
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderNavbar();
    const links = screen.getAllByRole("link");

    pages.forEach((page, index) => {
      expect(links[index]).toHaveTextContent(page);
    });
  });

  it("renders the burger menu button", () => {
    renderNavbar();
    const burgerButton = screen.getByRole("button", {
      name: /Show navigation/i,
    });
    expect(burgerButton).toBeInTheDocument();
  });

  it("renders the header text", () => {
    renderNavbar();
    const headerText = screen.getByText("Wedding Race");
    expect(headerText).toBeInTheDocument();
  });
});
