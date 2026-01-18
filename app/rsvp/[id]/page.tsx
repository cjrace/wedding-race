import sql from "@/db/neon";
import { notFound } from "next/navigation";
import { Title, Text, Divider } from "@mantine/core";
import WeddingTimeline from "@/components/weddingTimeline";
import RsvpFormClient from "@/components/rsvpFormClient";

export default async function InvitePage(props: {
  params: Promise<{ id: string }>;
}) {
  // Check For valid ID =======================================================
  const params = await props.params;
  const id = typeof params?.id === "string" ? params.id : "";

  const possible_ids_result = await sql`SELECT id FROM Invites`;
  const possible_ids = possible_ids_result.map((row: Record<string, any>) =>
    String(row.id),
  );

  if (!possible_ids.includes(id)) {
    return notFound();
  }

  // Check if already submitted ===============================================
  const invite_result =
    await sql`SELECT partyname, contactemail, contactnumber, maxguests, submitted, prewedding, children FROM Invites WHERE id = ${id}`;

  const submitted = invite_result[0].submitted;
  const preWedding = invite_result[0].prewedding;
  const children = invite_result[0].children;

  const guests =
    await sql`SELECT id, firstname, surname, rsvp, dietary FROM Guests WHERE inviteid = ${id}`;

  if (submitted) {
    return (
      <>
        <Title order={1}>RSVP for the Race-Selby Wedding</Title>
        <Text>Thank you for your RSVP!</Text>
        <Text>We have received your response for the following guests:</Text>
        {guests.map((guest: Record<string, any>) => (
          <Text key={guest.id}>
            {guest.firstname} {guest.surname}:{" "}
            {guest.rsvp ? "Attending" : "Not Attending"}
            {" | "}
            {guest.dietary ? guest.dietary : "No dietary requirements"}
          </Text>
        ))}

        <Text>
          If this looks wrong, or you want to make any changes, contact us so we
          can update our records.
        </Text>

        <Divider my="lg" />

        <Title order={2}>Your wedding timeline</Title>
        <WeddingTimeline preWedding={preWedding} />
      </>
    );
  }

  // Main RSVP form ===========================================================
  const partyName = invite_result[0].partyname;
  const maxGuests = invite_result[0].maxguests;

  const initialGuests = guests.map((guest: Record<string, any>) => ({
    id: guest.id,
    firstname: guest.firstname,
    surname: guest.surname,
  }));

  const maxAdditionalGuests = Math.max(0, maxGuests - guests.length);

  return (
    <>
      <Title order={1}>RSVP for the Race-Selby Wedding</Title>

      <RsvpFormClient
        partyID={id}
        partyName={partyName}
        preWedding={preWedding}
        guestInformation={initialGuests}
        maxAdditionalGuests={maxAdditionalGuests}
        children={children}
      />
    </>
  );
}
