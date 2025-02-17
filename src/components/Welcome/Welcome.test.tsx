import { render, screen } from "@/test-utils";
import { Welcome } from "./Welcome";

describe("Welcome component", () => {
  it("has correct header text", () => {
    render(<Welcome />);
    const headerElement = screen.getByRole("heading", {
      name: "Welcome to the Race Wedding",
    });
    expect(headerElement.tagName).toBe("H1");
  });
});
