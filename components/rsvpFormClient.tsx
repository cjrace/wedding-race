"use client";

import { useState } from "react";
import { Title, Text, Divider, Button, Group } from "@mantine/core";
import InviteText from "@/components/invitetext";
import { RsvpGuest } from "@/components/rsvpGuest";
import { useRouter } from "next/navigation";

// Extend the Window interface to include processingRsvp
declare global {
  interface Window {
    processingRsvp?: boolean;
  }
}

interface GuestInformation {
  id: string;
  firstname: string;
  surname: string;
  dietary?: string;
  rsvp?: string;
  child?: boolean;
}

interface RsvpFormClientProps {
  partyID: string;
  partyName: string;
  preWedding: boolean;
  guestInformation: GuestInformation[];
  maxAdditionalGuests: number;
  children: number;
}

export default function RsvpFormClient({
  partyID,
  partyName,
  preWedding,
  guestInformation,
  maxAdditionalGuests,
  children,
}: RsvpFormClientProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line no-undef
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    // eslint-disable-next-line no-undef
    const formData = new FormData(form);

    // Debug: log all formData entries
    if (typeof window !== "undefined") {
      // Convert FormData to array for logging
      console.log("RSVP formData entries:", Array.from(formData.entries()));
    }

    // Validate all original guests' RSVP (including children)
    const nonChildGuests = guestInformation.filter((g) => !g.child);
    const childGuests = guestInformation.filter((g) => g.child);
    // Validate non-child guests
    for (let i = 0; i < nonChildGuests.length; i++) {
      const attending = formData.get(`guest-${i}-attending`);
      if (!attending) {
        setError("Please select attending status for all original guests.");
        return;
      }
    }
    // Validate child guests
    for (let i = 0; i < childGuests.length; i++) {
      const attending = formData.get(`child-existing-${i}-attending`);
      if (!attending) {
        setError(
          "Please select attending status for all original guests (including children). Please check the children section.",
        );
        return;
      }
    }

    // Validate additional guests' names if any RSVP is set
    for (let i = 0; i < maxAdditionalGuests; i++) {
      const firstname = (
        formData.get(`additional-${i}-firstname`) as string
      )?.trim();
      const surname = (
        formData.get(`additional-${i}-surname`) as string
      )?.trim();
      const attending = formData.get(`additional-${i}-attending`);
      if (attending && (!firstname || !surname)) {
        setError(
          "Please provide first name and surname for all additional guests you RSVP for.",
        );
        return;
      }
    }

    // eslint-disable-next-line no-undef
    const res = await fetch("/api/submitrsvp", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      router.push(`/rsvp/${data.partyID}`);
    } else {
      setError(data.error || "Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="partyID" value={partyID} />
      <input type="hidden" name="guestCount" value={guestInformation.length} />

      <Text>Hey {partyName}, we're excited to invite you to our wedding!</Text>
      <InviteText preWedding={preWedding} />
      <Text>
        Complete your RSVP below to then see the wedding itinerary and links to
        book accomodation.
      </Text>
      <Divider my="md" />

      <Title order={2}>Party details</Title>

      <Title order={2}>Your details</Title>
      {guestInformation
        .filter((guest) => !guest.child)
        .map((guest, idx) => (
          <div key={guest.id} style={{ marginBottom: 16 }}>
            <input type="hidden" name={`guest-${idx}-id`} value={guest.id} />
            <RsvpGuest
              guest={guest}
              dietaryRequirements={guest.dietary || ""}
              attending={guest.rsvp as "yes" | "no" | undefined}
              fieldNamePrefix={`guest-${idx}-`}
              preWedding={preWedding}
            />
          </div>
        ))}

      {children > 0 && (
        <>
          <Divider my="md" />
          <Title order={2}>Children</Title>
          <Text>
            We have children in a separate section here just so we can easily
            track how many youngsters to expect, RSVP for them below.
          </Text>

          <Text>
            We are relaxed and want to give you the choice whether you want to
            bring your {children === 1 ? "child" : "children"} with you or not.
            Our main concern is that you can have a great time, and whether you
            want to do that as a full family or just as adults, we will happily
            support you either way.
          </Text>
          <Text>
            There will be young children at the wedding (such as Lola), and
            there will also be parents very happily taking time away from their
            children. Whatever you do, you will be in good company!
          </Text>
          <Divider my="md" />

          {guestInformation
            .filter((guest) => guest.child)
            .map((guest, idx) => (
              <div key={guest.id} style={{ marginBottom: 16 }}>
                <input
                  type="hidden"
                  name={`child-existing-${idx}-id`}
                  value={guest.id}
                />
                <RsvpGuest
                  guest={guest}
                  dietaryRequirements={guest.dietary || ""}
                  attending={guest.rsvp as "yes" | "no" | undefined}
                  fieldNamePrefix={`child-existing-${idx}-`}
                  preWedding={preWedding}
                  additional={false}
                />
              </div>
            ))}

          {[
            ...Array(
              children - guestInformation.filter((g) => g.child).length > 0
                ? children - guestInformation.filter((g) => g.child).length
                : 0,
            ),
          ].map((_, idx) => (
            <div key={`child-additional-${idx}`} style={{ marginBottom: 16 }}>
              <RsvpGuest
                guest={{
                  id: `child-additional-${idx}`,
                  firstname: "",
                  surname: "",
                }}
                dietaryRequirements=""
                attending={undefined}
                fieldNamePrefix={`child-additional-${idx}-`}
                additional={true}
                preWedding={preWedding}
              />
            </div>
          ))}
        </>
      )}

      {maxAdditionalGuests > 0 && (
        <>
          <Divider my="md" />
          <Title order={2}>
            Add additional {maxAdditionalGuests === 1 ? "guest" : "guests"}
          </Title>
          <Text>
            You can invite up to {maxAdditionalGuests} additional{" "}
            {maxAdditionalGuests === 1
              ? "guest as a plus one"
              : "guests as plus ones"}
            .
          </Text>
          <Divider my="md" />
          {[...Array(maxAdditionalGuests)].map((_, idx) => (
            <div key={`additional-${idx}`} style={{ marginBottom: 16 }}>
              <RsvpGuest
                guest={{
                  id: `additional-${idx}`,
                  firstname: "",
                  surname: "",
                }}
                dietaryRequirements=""
                attending={undefined}
                fieldNamePrefix={`additional-${idx}-`}
                additional={true}
                preWedding={preWedding}
              />
            </div>
          ))}
        </>
      )}

      <Group mt="md">
        <Button
          type="submit"
          loading={
            !!error === false &&
            typeof window !== "undefined" &&
            typeof window.processingRsvp !== "undefined" &&
            window.processingRsvp
          }
        >
          {typeof window !== "undefined" &&
          typeof window.processingRsvp !== "undefined" &&
          window.processingRsvp
            ? "Processing the RSVP..."
            : "Submit RSVP"}
        </Button>
        {error && (
          <Text c="red" mt={0}>
            {error}
          </Text>
        )}
        {/* Show processing message if no error and form is submitting */}
        {typeof window !== "undefined" &&
          typeof window.processingRsvp !== "undefined" &&
          window.processingRsvp &&
          !error && <Text mt={0}>Processing the RSVP...</Text>}
      </Group>
    </form>
  );
}
