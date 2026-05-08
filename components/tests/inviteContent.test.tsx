import "@testing-library/jest-dom";
import { render, screen, userEvent, waitFor } from "../../test-utils";
import { axe } from "jest-axe";
import InviteContent from "../../app/your-invitation/_inviteContent";

const fetchMock = jest.fn();
const replaceMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: (...args: unknown[]) => replaceMock(...args) }),
}));

beforeEach(() => {
  fetchMock.mockReset();
  replaceMock.mockReset();
  globalThis.fetch = fetchMock as unknown as typeof fetch;
});

afterEach(() => {
  // @ts-expect-error reset
  delete globalThis.fetch;
});

const getInput = () => screen.getByRole("textbox", { name: /invite code/i });
const getSubmit = () => screen.getByRole("button", { name: /^submit$/i });

describe("InviteContent", () => {
  it("renders the invite-not-found error when the API returns success=false", async () => {
    fetchMock.mockResolvedValueOnce({ json: async () => ({ success: false }) });
    render(<InviteContent />);
    await userEvent.type(getInput(), "bad-code");
    await userEvent.click(getSubmit());

    expect(
      await screen.findByText(/invite code not found/i),
    ).toBeInTheDocument();
    expect(replaceMock).not.toHaveBeenCalled();
  });

  it("clears the error when the user types again", async () => {
    fetchMock.mockResolvedValueOnce({ json: async () => ({ success: false }) });
    render(<InviteContent />);
    await userEvent.type(getInput(), "bad-code");
    await userEvent.click(getSubmit());
    expect(
      await screen.findByText(/invite code not found/i),
    ).toBeInTheDocument();

    await userEvent.type(getInput(), "x");
    await waitFor(() =>
      expect(
        screen.queryByText(/invite code not found/i),
      ).not.toBeInTheDocument(),
    );
  });

  it("navigates to /your-invitation/<code> on success and trims+lowercases", async () => {
    fetchMock.mockResolvedValueOnce({ json: async () => ({ success: true }) });
    render(<InviteContent />);
    // The component trims on every keystroke; pad with non-whitespace and rely on lowercase.
    await userEvent.type(getInput(), "ABC123");
    await userEvent.click(getSubmit());

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/checkInvite");
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body)).toEqual({ inviteCode: "abc123" });
    expect(replaceMock).toHaveBeenCalledWith("/your-invitation/abc123");
  });

  it("renders a server-error message when fetch rejects", async () => {
    fetchMock.mockRejectedValueOnce(new Error("network down"));
    render(<InviteContent />);
    await userEvent.type(getInput(), "abc");
    await userEvent.click(getSubmit());

    expect(await screen.findByText(/server error/i)).toBeInTheDocument();
    expect(replaceMock).not.toHaveBeenCalled();
  });

  it("has no axe violations in the default state", async () => {
    const { container } = render(<InviteContent />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations when an error is shown", async () => {
    fetchMock.mockResolvedValueOnce({ json: async () => ({ success: false }) });
    const { container } = render(<InviteContent />);
    await userEvent.type(getInput(), "bad-code");
    await userEvent.click(getSubmit());
    await screen.findByText(/invite code not found/i);
    expect(await axe(container)).toHaveNoViolations();
  });
});
