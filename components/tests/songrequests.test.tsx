import "@testing-library/jest-dom";
import { render, screen, userEvent, waitFor } from "../../test-utils";
import SongRequests from "../songrequests";

const fetchMock = jest.fn();

beforeEach(() => {
  fetchMock.mockReset();
  globalThis.fetch = fetchMock as unknown as typeof fetch;
});

afterEach(() => {
  // @ts-expect-error reset
  delete globalThis.fetch;
});

async function fillAndSubmit() {
  await userEvent.type(
    screen.getByRole("textbox", { name: /song title/i }),
    "Wonderwall",
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: /^artist$/i }),
    "Oasis",
  );
  await userEvent.click(
    screen.getByRole("button", { name: /submit song suggestion/i }),
  );
}

describe("SongRequests", () => {
  it("posts inviteId, song, and artist to /api/spotify-add", async () => {
    fetchMock.mockResolvedValueOnce({ ok: true });
    render(<SongRequests inviteId="party-7" />);
    await fillAndSubmit();

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/spotify-add");
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body)).toEqual({
      inviteId: "party-7",
      song: "Wonderwall",
      artist: "Oasis",
    });
  });

  it("renders a success status and clears inputs on 200", async () => {
    fetchMock.mockResolvedValueOnce({ ok: true });
    render(<SongRequests inviteId="party-7" />);
    await fillAndSubmit();

    expect(
      await screen.findByText(/Request submitted for "Wonderwall" by "Oasis"!/),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /song title/i })).toHaveValue(
      "",
    );
    expect(screen.getByRole("textbox", { name: /^artist$/i })).toHaveValue("");
  });

  it("renders a failure status when the response is not ok", async () => {
    fetchMock.mockResolvedValueOnce({ ok: false });
    render(<SongRequests inviteId="party-7" />);
    await fillAndSubmit();

    expect(
      await screen.findByText(/Failed to submit request\./i),
    ).toBeInTheDocument();
  });

  it("renders an error status when fetch throws", async () => {
    fetchMock.mockRejectedValueOnce(new Error("network down"));
    render(<SongRequests inviteId="party-7" />);
    await fillAndSubmit();

    expect(
      await screen.findByText(/Error submitting request\./i),
    ).toBeInTheDocument();
  });
});
