import "@testing-library/jest-dom";
import { render } from "../../test-utils/render";
import { screen } from "@testing-library/react";
import VenueSection from "../venueSection";

describe("VenueSection", () => {
  it("renders all section headings", () => {
    render(<VenueSection preWedding={false} />);
    const headings = [
      "Venue and accommodation",
      "Venue",
      "Wedding village",
      "On site cottages",
      "Local hotels",
      "Booking accommodation",
    ];
    headings.forEach((heading) => {
      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    });
  });

  it("renders the booking portal link", () => {
    render(<VenueSection preWedding={false} />);
    const bookingLink = screen.getByRole("link", { name: /booking portal/i });
    expect(bookingLink).toHaveAttribute("target", "_blank");
  });

  it("preserves the booking-accommodation anchor target", () => {
    const { container } = render(<VenueSection preWedding={false} />);
    expect(container.querySelector("#booking-accommodation")).not.toBeNull();
  });

  it("uses preWedding wording when preWedding=true", () => {
    render(<VenueSection preWedding={true} />);
    expect(
      screen.getByText(/whole three days so if you can only join us/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/10pm the night before/i)).toBeInTheDocument();
  });

  it("uses non-preWedding wording when preWedding=false", () => {
    render(<VenueSection preWedding={false} />);
    expect(
      screen.getByText(/please remember to change this to just the 9th/i),
    ).toBeInTheDocument();
  });
});
