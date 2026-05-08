import "@testing-library/jest-dom";
import { render, screen } from "../../test-utils";
import { RsvpGuest } from "../rsvpGuest";

const guest = { id: "g1", firstname: "Ada", surname: "Lovelace" };

describe("RsvpGuest", () => {
  it("renders the bold name (no inputs) when additional=false", () => {
    render(
      <RsvpGuest guest={guest} fieldNamePrefix="guest-0-" additional={false} />,
    );
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
    expect(screen.queryByLabelText("First name")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Surname")).not.toBeInTheDocument();
  });

  it("renders first name + surname inputs when additional=true", () => {
    render(
      <RsvpGuest
        guest={{ id: "a0", firstname: "", surname: "" }}
        fieldNamePrefix="additional-0-"
        additional={true}
      />,
    );
    expect(screen.getByLabelText("First name")).toBeInTheDocument();
    expect(screen.getByLabelText("Surname")).toBeInTheDocument();
  });

  it("renders three radios with prewedding values when preWedding=true", () => {
    const { container } = render(
      <RsvpGuest guest={guest} fieldNamePrefix="g-" preWedding={true} />,
    );
    const radios = container.querySelectorAll('input[type="radio"]');
    const values = Array.from(radios).map((r) => r.getAttribute("value"));
    expect(values).toEqual(["yes-prewedding", "yes-wedding", "no"]);
  });

  it("renders two radios with yes/no values when preWedding=false", () => {
    const { container } = render(
      <RsvpGuest guest={guest} fieldNamePrefix="g-" preWedding={false} />,
    );
    const radios = container.querySelectorAll('input[type="radio"]');
    const values = Array.from(radios).map((r) => r.getAttribute("value"));
    expect(values).toEqual(["yes", "no"]);
  });

  it("shows the required asterisk on the attending label when additional=false", () => {
    const { container } = render(
      <RsvpGuest guest={guest} fieldNamePrefix="g-" additional={false} />,
    );
    // Mantine renders withAsterisk via a span containing "*" inside the label
    const asterisk = container.querySelector(
      ".mantine-InputWrapper-required, [data-required]",
    );
    expect(asterisk ?? container.textContent).toBeTruthy();
    expect(container.textContent).toMatch(/Attending\s*\*/);
  });

  it("does not show the asterisk on the attending label when additional=true", () => {
    const { container } = render(
      <RsvpGuest
        guest={{ id: "a0", firstname: "", surname: "" }}
        fieldNamePrefix="a-"
        additional={true}
      />,
    );
    expect(container.textContent).not.toMatch(/Attending\s*\*/);
  });

  it("renders the dietary input with the prefixed name and seeded value", () => {
    const { container } = render(
      <RsvpGuest
        guest={guest}
        fieldNamePrefix="guest-0-"
        dietaryRequirements="vegan"
      />,
    );
    const dietary = container.querySelector(
      'input[name="guest-0-dietary"]',
    ) as HTMLInputElement | null;
    expect(dietary).not.toBeNull();
    expect(dietary?.value).toBe("vegan");
  });

  it("uses the prefixed name on the radio group", () => {
    const { container } = render(
      <RsvpGuest guest={guest} fieldNamePrefix="child-existing-2-" />,
    );
    expect(
      container.querySelector('input[name="child-existing-2-attending"]'),
    ).not.toBeNull();
  });
});
