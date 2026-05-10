import "@testing-library/jest-dom";
import { act, render, screen, userEvent, waitFor } from "../../test-utils";
import { axe } from "jest-axe";
import RsvpFormClient from "../rsvpFormClient";

const fetchMock = jest.fn();
const pushMock = jest.fn();
const playConfettiMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: (...args: unknown[]) => pushMock(...args) }),
}));

jest.mock("../playconfetti", () => ({
  __esModule: true,
  default: () => playConfettiMock(),
}));

beforeEach(() => {
  fetchMock.mockReset();
  pushMock.mockReset();
  playConfettiMock.mockReset();
  globalThis.fetch = fetchMock as unknown as typeof fetch;
  // Spy console.log to silence the formData debug noise from the component
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  // @ts-expect-error reset
  delete globalThis.fetch;
  jest.restoreAllMocks();
});

const namedGuest = {
  id: "1",
  firstname: "Ada",
  surname: "Lovelace",
  child: false,
};

const submit = () =>
  userEvent.click(screen.getByRole("button", { name: /submit rsvp/i }));

describe("RsvpFormClient", () => {
  describe("validation", () => {
    it("blocks submit when an attending option is not selected for a named guest", async () => {
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={0}
          children={0}
        />,
      );
      await submit();

      expect(
        await screen.findByText(
          /please select attending status for all named guests\./i,
        ),
      ).toBeInTheDocument();
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it("blocks submit when an attending option is not selected for a child guest", async () => {
      const childGuest = {
        id: "2",
        firstname: "Lola",
        surname: "Lovelace",
        child: true,
      };
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[{ ...namedGuest, rsvp: "yes" }, childGuest]}
          maxAdditionalGuests={0}
          children={1}
        />,
      );
      await submit();

      expect(
        await screen.findByText(/check the children section/i),
      ).toBeInTheDocument();
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it("blocks submit when an additional guest has attending selected but no name", async () => {
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[{ ...namedGuest, rsvp: "yes" }]}
          maxAdditionalGuests={1}
          children={0}
        />,
      );
      // Select "Yes" on the additional guest's radio without entering names
      const additionalRadios = screen.getAllByRole("radio", {
        name: /yes, i will be attending/i,
      });
      // Index 1 = the additional guest's radio (index 0 is the named guest)
      await userEvent.click(additionalRadios[1]);
      await submit();

      expect(
        await screen.findByText(
          /please provide first name and surname for all additional guests/i,
        ),
      ).toBeInTheDocument();
      expect(fetchMock).not.toHaveBeenCalled();
    });
  });

  describe("submit", () => {
    it("calls /api/submitrsvp and routes on success", async () => {
      jest.useFakeTimers();
      try {
        fetchMock.mockResolvedValueOnce({
          json: async () => ({ success: true, partyID: "p1" }),
        });
        render(
          <RsvpFormClient
            partyID="p1"
            partyName="Lovelace"
            preWedding={false}
            guestInformation={[{ ...namedGuest, rsvp: "yes" }]}
            maxAdditionalGuests={0}
            children={0}
          />,
        );
        const user = userEvent.setup({
          advanceTimers: jest.advanceTimersByTime,
        });
        await user.click(screen.getByRole("button", { name: /submit rsvp/i }));
        // The component delays the fetch by 50ms via setTimeout
        await act(async () => {
          await jest.advanceTimersByTimeAsync(100);
        });

        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        const [url, init] = fetchMock.mock.calls[0];
        expect(url).toBe("/api/submitrsvp");
        expect(init.method).toBe("POST");
        expect(init.body).toBeInstanceOf(globalThis.FormData);
        expect((init.body as FormData).get("partyID")).toBe("p1");

        await waitFor(() =>
          expect(pushMock).toHaveBeenCalledWith("/guest-information/p1"),
        );
        expect(playConfettiMock).toHaveBeenCalledTimes(1);
      } finally {
        jest.useRealTimers();
      }
    });

    it("renders the server error and re-enables the submit button on failure", async () => {
      jest.useFakeTimers();
      try {
        fetchMock.mockResolvedValueOnce({
          json: async () => ({ success: false, error: "Database is down" }),
        });
        render(
          <RsvpFormClient
            partyID="p1"
            partyName="Lovelace"
            preWedding={false}
            guestInformation={[{ ...namedGuest, rsvp: "yes" }]}
            maxAdditionalGuests={0}
            children={0}
          />,
        );
        const user = userEvent.setup({
          advanceTimers: jest.advanceTimersByTime,
        });
        await user.click(screen.getByRole("button", { name: /submit rsvp/i }));
        await act(async () => {
          await jest.advanceTimersByTimeAsync(100);
        });

        expect(
          await screen.findByText(/database is down/i),
        ).toBeInTheDocument();
        expect(pushMock).not.toHaveBeenCalled();
        expect(
          screen.getByRole("button", { name: /submit rsvp/i }),
        ).not.toBeDisabled();
      } finally {
        jest.useRealTimers();
      }
    });
  });

  describe("conditional rendering", () => {
    it("renders the three-day copy and three-radio attendance when preWedding=true", () => {
      const { container } = render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={true}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={0}
          children={0}
        />,
      );
      expect(
        screen.getByText(/celebration runs over three days/i),
      ).toBeInTheDocument();
      const radios = container.querySelectorAll('input[type="radio"]');
      const values = Array.from(radios).map((r) => r.getAttribute("value"));
      expect(values).toEqual(["yes-prewedding", "yes-wedding", "no"]);
    });

    it("renders the single-day copy and two-radio attendance when preWedding=false", () => {
      const { container } = render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={0}
          children={0}
        />,
      );
      expect(screen.getByText(/on Tuesday 9th June 2026/i)).toBeInTheDocument();
      const radios = container.querySelectorAll('input[type="radio"]');
      const values = Array.from(radios).map((r) => r.getAttribute("value"));
      expect(values).toEqual(["yes", "no"]);
    });

    it("hides the children section when children=0", () => {
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={0}
          children={0}
        />,
      );
      expect(
        screen.queryByRole("heading", { name: /^Children$/ }),
      ).not.toBeInTheDocument();
    });

    it("shows the children section when children>0", () => {
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={0}
          children={1}
        />,
      );
      expect(
        screen.getByRole("heading", { name: /^Children$/ }),
      ).toBeInTheDocument();
    });

    it("hides the plus-ones section when maxAdditionalGuests=0", () => {
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={0}
          children={0}
        />,
      );
      expect(
        screen.queryByRole("heading", { name: /offering plus ones/i }),
      ).not.toBeInTheDocument();
    });

    it("shows the plus-ones section when maxAdditionalGuests>0", () => {
      render(
        <RsvpFormClient
          partyID="p1"
          partyName="Lovelace"
          preWedding={false}
          guestInformation={[namedGuest]}
          maxAdditionalGuests={2}
          children={0}
        />,
      );
      expect(
        screen.getByRole("heading", { name: /offering plus ones/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/up to 2 additional guests as your plus ones/i),
      ).toBeInTheDocument();
    });
  });

  it("has no axe violations in a representative configuration", async () => {
    const { container } = render(
      <RsvpFormClient
        partyID="p1"
        partyName="Lovelace"
        preWedding={true}
        guestInformation={[
          { ...namedGuest },
          {
            id: "c1",
            firstname: "Lola",
            surname: "Lovelace",
            child: true,
          },
        ]}
        maxAdditionalGuests={1}
        children={1}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
