"use client";

import { Title, Text, Divider, Button, TextInput } from "@mantine/core";
import InviteText from "@/components/invitetext";
import { RsvpGuest } from "@/components/rsvpGuest";
import { useRouter } from "next/navigation";

interface GuestInformation {
  id: string;
  firstname: string;
  surname: string;
  dietary?: string;
  rsvp?: string;
}

interface RsvpFormClientProps {
  partyID: string;
  partyName: string;
  preWedding: boolean;
  guestInformation: GuestInformation[];
  maxAdditionalGuests: number;
  children: boolean;
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

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    // eslint-disable-next-line no-undef
    const formData = new FormData(form);
    // eslint-disable-next-line no-undef
    const res = await fetch("/api/submitrsvp", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      router.push(`/rsvp/${data.partyID}`);
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
              <TextInput
                label="First name"
                name={`additional-${idx}-firstname`}
                mb="sm"
              />
              <TextInput
                label="Surname"
                name={`additional-${idx}-surname`}
                mb="sm"
              />
              <RsvpGuest
                guest={{
                  id: `additional-${idx}`,
                  firstname: "",
                  surname: "",
                }}
                dietaryRequirements=""
                attending={undefined}
                fieldNamePrefix={`additional-${idx}-`}
              />
            </div>
          ))}
        </>
      )}

      <Button type="submit">Submit RSVP</Button>
    </form>
  );
}
