import "@testing-library/jest-dom";
import { render, screen, userEvent } from "../../test-utils";
import BackToTop from "../backtotop";

const scrollToMock = jest.fn();
let scrollY = 0;

jest.mock("@mantine/hooks", () => {
  const actual = jest.requireActual("@mantine/hooks");
  return {
    ...actual,
    useWindowScroll: () => [{ x: 0, y: scrollY }, scrollToMock],
  };
});

beforeEach(() => {
  scrollToMock.mockClear();
  scrollY = 0;
});

describe("BackToTop", () => {
  it("does not show the button when scroll.y is 0", () => {
    render(<BackToTop />);
    expect(
      screen.queryByRole("button", { name: /back to top/i }),
    ).not.toBeInTheDocument();
  });

  it("shows the button when scrolled and clicking it scrolls to top", async () => {
    scrollY = 800;
    render(<BackToTop />);
    const button = await screen.findByRole("button", { name: /back to top/i });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(scrollToMock).toHaveBeenCalledWith({ y: 0 });
  });
});
