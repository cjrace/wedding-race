import "@testing-library/jest-dom";
import { MantineProvider } from "@mantine/core";
import Navbar, { pages } from "./Navbar";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Navbar", () => {
  const renderNavbar = () =>
    render(
      <MantineProvider>
        <Navbar>{undefined}</Navbar>
      </MantineProvider>,
    );

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
