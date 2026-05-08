import "@testing-library/jest-dom";
import Navbar, { pages } from "../pageshell";
import { act, render, userEvent } from "../../test-utils";
import { screen } from "@testing-library/react";
import { axe } from "jest-axe";

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
      expect(links[index]).toHaveTextContent(page.label);
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

  it("toggles the burger button's open state on click", async () => {
    renderNavbar();
    const burgerButton = screen.getByRole("button", {
      name: /Show navigation/i,
    });
    // Snapshot the burger's outerHTML before/after to detect a state change.
    // (Mantine doesn't expose aria-expanded on Burger; the visual state is class-driven.)
    const before = burgerButton.outerHTML;
    await userEvent.click(burgerButton);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });
    expect(burgerButton.outerHTML).not.toBe(before);
    await userEvent.click(burgerButton);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });
    expect(burgerButton.outerHTML).toBe(before);
  });

  it("has no axe violations in the default state", async () => {
    const { container } = renderNavbar();
    expect(await axe(container)).toHaveNoViolations();
  });
});
