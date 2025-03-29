import { render } from "../../test-utils/render";
import PageCard from "../pagecard";
import Us from "@/public/images/cam-and-laura.png";

describe("PageCard", () => {
  const props = {
    image: Us,
    title: "Test Title",
    description: "Test Description",
    link: "https://example.com",
  };

  it("renders without crashing", () => {
    const { getByText } = render(<PageCard {...props} />);
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
  });

  it("renders the link with correct href", () => {
    const { getByRole } = render(<PageCard {...props} />);
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
