import "@testing-library/jest-dom";
import { MantineProvider } from "@mantine/core";
import Navbar, { pages } from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders the navigation bar", () => {
    render(
      <MantineProvider>
        <Navbar>{undefined}</Navbar>
      </MantineProvider>,
    );
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(
      <MantineProvider>
        <Navbar>{undefined}</Navbar>
      </MantineProvider>,
    );
    const links = screen.getAllByRole("link");

    pages.forEach((page) => {
      expect(links[pages.indexOf(page)]).toHaveTextContent(page);
    });
  });
});
