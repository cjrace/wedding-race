import { act } from "@testing-library/react";
import Countdown from "../countdown";
import { render, screen } from "../../test-utils";

// Use fake timers to control the passage of time in the tests
jest.useFakeTimers();

beforeEach(() => {
  // Clear all timers before each test to ensure no timers from previous tests interfere
  jest.clearAllTimers();
});

test("renders text as expected", () => {
  render(<Countdown date={new Date("2095-08-08T19:17:08Z")} />);

  const daysElement = screen.getByText("days").previousElementSibling;
  const hoursElement = screen.getByText("hours").previousElementSibling;
  const minutesElement = screen.getByText("minutes").previousElementSibling;
  const secondsElement = screen.getByText("seconds").previousElementSibling;

  const combinedText = `${daysElement?.textContent} days, ${hoursElement?.textContent} hours, ${minutesElement?.textContent} minutes, ${secondsElement?.textContent} seconds`;

  expect(combinedText).toMatch(/\d+ days, \d+ hours, \d+ minutes, \d+ seconds/);
});

const checkCountdownUpdate = (
  time: number,
  regex: string[],
  change: boolean,
) => {
  const elements = regex.map((r) => screen.getByText(r).previousElementSibling);
  const getTextContent = () =>
    elements.map((element) => element?.textContent ?? "").join(" ");

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

test("updates countdown after every second", () => {
  render(<Countdown date={new Date("2095-08-08T00:00:00Z")} />);

  // Check the seconds have changed after 1 and 2 seconds
  checkCountdownUpdate(1000, ["seconds"], true);
  checkCountdownUpdate(1000, ["seconds"], true);

  // Minutes, hours, and days should not have changed after 2 seconds
  checkCountdownUpdate(0, ["days", "hours", "minutes"], false);

  // Minutes changes after one minute
  checkCountdownUpdate(60000, ["minutes"], true);

  // Days and hours should not have changed after 1 minute
  checkCountdownUpdate(0, ["days", "hours"], false);

  // Hours changes after one hour
  checkCountdownUpdate(3600000, ["hours"], true);

  // Days should not have changed after 1 hour
  checkCountdownUpdate(0, ["days"], false);

  // Days changes after one day
  checkCountdownUpdate(86400000, ["days"], true);
});

test("clears interval on unmount", () => {
  const clearIntervalSpy = jest.spyOn(global, "clearInterval");
  try {
    const { unmount } = render(
      <Countdown date={new Date("2095-08-08T19:17:08Z")} />,
    );
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  } finally {
    clearIntervalSpy.mockRestore();
  }
});
