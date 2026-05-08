import "@testing-library/jest-dom";
import { render } from "../../test-utils/render";
import { screen } from "@testing-library/react";
import OnTheDaySection from "../onTheDaySection";

describe("OnTheDaySection", () => {
  const renderContent = () => render(<OnTheDaySection />);

  it("renders all section headings", () => {
    renderContent();
    const headings = [
      "On the day",
      "Arrival",
      "Parking",
      "Local taxis",
      "What to pack & footwear",
      "What to wear",
      "Getting ready",
      "Ceremony seating",
      "Photos & the shared album",
      "Children",
      "House rules",
      "The village",
      "Coming and going",
      "After-party",
      "Make yourself at home",
    ];
    headings.forEach((heading) => {
      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    });
  });

  it("renders the shared photo album link", () => {
    renderContent();
    const photoLink = screen.getByRole("link", {
      name: /Add your photos to the shared album/i,
    });
    expect(photoLink).toHaveAttribute(
      "href",
      "https://photos.app.goo.gl/GvyQND53UQbxKsAA6",
    );
  });
});
