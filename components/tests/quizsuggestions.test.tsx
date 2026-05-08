import "@testing-library/jest-dom";
import { render, screen, userEvent, waitFor } from "../../test-utils";
import QuizSuggestions from "../quizsuggestions";

const fetchMock = jest.fn();

beforeEach(() => {
  fetchMock.mockReset();
  globalThis.fetch = fetchMock as unknown as typeof fetch;
});

afterEach(() => {
  // @ts-expect-error reset
  delete globalThis.fetch;
});

const getInput = () =>
  screen.getByRole("textbox", { name: /suggestions for the quiz/i });
const getButton = () =>
  screen.getByRole("button", { name: /submit quiz suggestion/i });

describe("QuizSuggestions", () => {
  it("posts inviteId and suggestion to /api/quiz-suggestions", async () => {
    fetchMock.mockResolvedValueOnce({ ok: true });
    render(<QuizSuggestions inviteId="party-9" />);
    await userEvent.type(getInput(), "Geography round");
    await userEvent.click(getButton());

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/quiz-suggestions");
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body)).toEqual({
      inviteId: "party-9",
      suggestion: "Geography round",
    });
  });

  it("renders the success message and clears the input on 200", async () => {
    fetchMock.mockResolvedValueOnce({ ok: true });
    render(<QuizSuggestions inviteId="party-9" />);
    await userEvent.type(getInput(), "Geography round");
    await userEvent.click(getButton());

    expect(
      await screen.findByText(/thank you for your suggestion!/i),
    ).toBeInTheDocument();
    expect(getInput()).toHaveValue("");
  });

  it("renders the error message when the response is not ok", async () => {
    fetchMock.mockResolvedValueOnce({ ok: false });
    render(<QuizSuggestions inviteId="party-9" />);
    await userEvent.type(getInput(), "Geography round");
    await userEvent.click(getButton());

    expect(
      await screen.findByText(/there was an error\. please try again\./i),
    ).toBeInTheDocument();
  });

  it("renders the error message when fetch throws", async () => {
    fetchMock.mockRejectedValueOnce(new Error("network down"));
    render(<QuizSuggestions inviteId="party-9" />);
    await userEvent.type(getInput(), "Geography round");
    await userEvent.click(getButton());

    expect(
      await screen.findByText(/there was an error\. please try again\./i),
    ).toBeInTheDocument();
  });
});
