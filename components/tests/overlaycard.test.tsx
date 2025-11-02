import { render } from "../../test-utils/render";
import OverlayCard from "../overlaycard";
import { screen } from "@testing-library/react";
import Us from "@/public/images/cam-and-laura.png";

describe("OverlayCard", () => {
  it("renders correctly", () => {
    render(
      <OverlayCard cardKey="test-card" image={Us} overlay="Test Overlay" />,
    );

    expect(screen.getByTestId("test-card")).toBeInTheDocument();
  });
});
