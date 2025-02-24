import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "../../test-utils";
import BackToTop from "../backtotop";
import { useWindowScroll } from "@mantine/hooks";

jest.mock("@mantine/hooks", () => ({
  useWindowScroll: jest.fn(),
  useIsomorphicEffect: jest.fn(),
}));

describe("BackToTop component", () => {
  it("renders without crashing", () => {
    (useWindowScroll as jest.Mock).mockReturnValue([{ y: 0 }, jest.fn()]);
    const { getByText } = render(<BackToTop />);
    expect(getByText("Back to top")).toBeInTheDocument();
  });

  it("is not visible when scroll position is 0", () => {
    (useWindowScroll as jest.Mock).mockReturnValue([{ y: 0 }, jest.fn()]);
    const { queryByText } = render(<BackToTop />);
    expect(queryByText("Back to top")).not.toBeVisible();
  });

  it("is visible when scroll position is greater than 0", () => {
    (useWindowScroll as jest.Mock).mockReturnValue([{ y: 100 }, jest.fn()]);
    const { getByText } = render(<BackToTop />);
    expect(getByText("Back to top")).toBeVisible();
  });

  it("scrolls to top when button is clicked", () => {
    const scrollToMock = jest.fn();
    (useWindowScroll as jest.Mock).mockReturnValue([{ y: 100 }, scrollToMock]);
    const { getByText } = render(<BackToTop />);
    fireEvent.click(getByText("Back to top"));
    expect(scrollToMock).toHaveBeenCalledWith({ y: 0 });
  });
});
