import { act } from "@testing-library/react";
import Countdown from "../countdown";
import { render, screen } from "../../test-utils";

// Use fake timers to control the passage of time in the tests
jest.useFakeTimers();

describe("Clear previous countdown timers", () => {
  // Clear all timers before each test to ensure no timers from previous tests interfere
  jest.clearAllTimers();
});

test("renders text as expected", () => {
  render(<Countdown date={new Date("2095-08-08T19:17:08Z")} />);
  const textElement = screen.getByText(
    /days, \d+ hours, \d+ minutes, \d+ seconds/i,
  );
  expect(textElement).toBeInTheDocument();
});

test("updates countdown after every second", () => {
  render(<Countdown date={new Date("2095-08-08T00:00:00Z")} />);
  const checkCountdownUpdate = (
    time: number,
    regex: RegExp,
    change: boolean,
  ) => {
    const elements = Array.from(screen.getAllByText(regex));
    const getTextContent = () =>
      elements.map((element) => element.textContent).join(" ");

    const initialText = getTextContent();

    act(() => {
      jest.advanceTimersByTime(time);
    });

    const updatedText = getTextContent();
    if (change) {
      expect(updatedText).not.toBe(initialText);
    } else {
      expect(updatedText).toBe(initialText);
    }
  };

  // Check the seconds have changed after 1 and 2 seconds
  checkCountdownUpdate(1000, /\d+ seconds/i, true);
  checkCountdownUpdate(1000, /\d+ seconds/i, true);

  // Minutes, hours, and days should not have changed after 2 seconds
  checkCountdownUpdate(0, /\d+ days, \d+ hours, \d+ minutes/i, false);

  // Minutes changes after one minute
  checkCountdownUpdate(58000, /\d+ minutes/i, true);

  // Days and hours should not have changed after 1 minute
  checkCountdownUpdate(0, /\d+ days, \d+ hours/i, false);

  // Hours changes after one hour
  checkCountdownUpdate(3540000, /\d+ hours/i, true);

  // Days should not have changed after 1 hour
  checkCountdownUpdate(0, /\d+ days/i, false);

  // Days changes after one day
  checkCountdownUpdate(8286000, /\d+ days/i, true);
});

test("clears interval on unmount", () => {
  const clearIntervalSpy = jest.spyOn(global, "clearInterval");
  const { unmount } = render(
    <Countdown date={new Date("2095-08-08T19:17:08Z")} />,
  );
  unmount();
  expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  clearIntervalSpy.mockRestore();
});
