"use client";

import { useState } from "react";
import {
  Title,
  Text,
  Divider,
  Button,
  TextInput,
  Notification,
} from "@mantine/core";
import InviteText from "@/components/invitetext";
import { RsvpGuest } from "@/components/rsvpGuest";
import { useRouter } from "next/navigation";

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
  children: boolean;
}

/**
 * Validates whether the provided string is in a valid email address format.
 *
 * Uses a regular expression to check for the general structure of an email address,
 * ensuring there are characters before and after the "@" symbol, and a domain with a period.
 *
 * @param email - The email address string to validate.
 * @returns `true` if the email is in a valid format, otherwise `false`.
 */
function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  // Simple validation: at least 8 digits, numbers, spaces, +, -, ()
  return /^[\d\s+\-()]{8,}$/.test(phone);
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

    // Validate contact email
    const email = formData.get("contact_email") as string;
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate contact phone
    const phone = formData.get("contact_phone") as string;
    if (!phone || !validatePhone(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    // Validate original guests' RSVP
    for (let i = 0; i < guestInformation.length; i++) {
      const attending = formData.get(`guest-${i}-attending`);
      if (!attending) {
        setError("Please select attending status for all original guests.");
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
        Complete your RSVP below and then you&apos;ll be able to see the wedding
        itinerary.
      </Text>
      <Divider my="md" />

      <Title order={2}>Party details</Title>
      <Text>
        Please provide your contact details below so we can keep you updated in
        the lead up to the wedding.
      </Text>

      <TextInput
        label="Contact email"
        type="email"
        name="contact_email"
        mb="sm"
        placeholder=""
        withAsterisk
        required
      />
      <TextInput
        label="Contact phone number"
        type="tel"
        name="contact_phone"
        mb="sm"
        placeholder=""
        withAsterisk
        required
      />

      {error && (
        <Notification color="red" mt="md" mb="md">
          {error}
        </Notification>
      )}

      <Divider my="md" />

      <Title order={2}>Your details</Title>
      {guestInformation.map((guest, idx) => (
        <div key={guest.id} style={{ marginBottom: 16 }}>
          <input type="hidden" name={`guest-${idx}-id`} value={guest.id} />
          <RsvpGuest
            guest={guest}
            dietaryRequirements={guest.dietary || ""}
            attending={guest.rsvp as "yes" | "no" | undefined}
            fieldNamePrefix={`guest-${idx}-`}
          />
        </div>
      ))}

      <Divider my="md" />

      {maxAdditionalGuests > 0 && (
        <>
          <Title order={2}>
            Add additional {maxAdditionalGuests === 1 ? "guest" : "guests"}
          </Title>
          <Text>
            You can invite up to {maxAdditionalGuests} additional{" "}
            {maxAdditionalGuests === 1 ? "guest" : "guests"}
            {children
              ? `, or ${maxAdditionalGuests === 1 ? "child" : "children"}`
              : ""}
            .
          </Text>

          {children && (
            <>
              <Text>
                It is up to you if you want to bring your children with you.
                There will be young children at the wedding (such as Lola), but
                there will also be parents very happily taking time away from
                their children - either way you will be in good company!
              </Text>
              <Text>
                If you are bringing your children, add them as additional guests
                below.
              </Text>
            </>
          )}
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
              />
            </div>
          ))}
        </>
      )}

      <Button type="submit">Submit RSVP</Button>
    </form>
  );
}
