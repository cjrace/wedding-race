import { render } from "../../test-utils";
import OverlayCard from "../overlaycard";

describe("OverlayCard", () => {
  const props = {
    cardKey: "testKey",
    imagePath: "path/to/image.jpg",
    overlay: "Test Overlay",
  };

  it("renders without crashing", () => {
    const card = render(<OverlayCard {...props} />);
    expect(card.getByTestId("testKey")).toBeInTheDocument();
  });
});
