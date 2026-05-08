import "@testing-library/jest-dom";
import { render, screen } from "../../test-utils";
import { axe } from "jest-axe";
import WelcomeSection from "../welcomeSection";

describe("WelcomeSection", () => {
  it("shows the thank-you copy when submitted=true", () => {
    render(<WelcomeSection submitted={true} />);
    expect(screen.getByText(/thank you for your rsvp/i)).toBeInTheDocument();
    expect(screen.queryByText(/cutting it very fine/i)).not.toBeInTheDocument();
  });

  it("shows the cutting-it-fine copy when submitted=false", () => {
    render(<WelcomeSection submitted={false} />);
    expect(screen.getByText(/cutting it very fine/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/thank you for your rsvp/i),
    ).not.toBeInTheDocument();
  });

  it("renders the practice-confetti button", () => {
    render(<WelcomeSection submitted={false} />);
    expect(
      screen.getByRole("button", { name: /practice your confetti/i }),
    ).toBeInTheDocument();
  });

  it("has no axe violations for either branch", async () => {
    const submitted = render(<WelcomeSection submitted={true} />);
    expect(await axe(submitted.container)).toHaveNoViolations();
    submitted.unmount();

    const fresh = render(<WelcomeSection submitted={false} />);
    expect(await axe(fresh.container)).toHaveNoViolations();
  });
});
