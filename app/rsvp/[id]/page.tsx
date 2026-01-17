import sql from "../../../db/neon";
import { notFound } from "next/navigation";
import { Title, Text, Button, Space } from "@mantine/core";

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
    await sql`SELECT partyname, textid, contactemail, contactnumber, maxguests, submitted FROM Invites WHERE id = ${id}`;

  const submitted = invite_result[0].submitted;

  const noDays = invite_result[0].textid;
  const daysText = await sql`SELECT text FROM InviteText WHERE id = ${noDays}`;

  const guests =
    await sql`SELECT id, firstname, surname, rsvp, dietary FROM Guests WHERE inviteid = ${id}`;

  if (submitted) {
    return (
      <>
        <Title order={1}>RSVP for the Wedding of Race</Title>
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
      <Title order={1}>RSVP for the Wedding of Race</Title>

      <Text>Hey {partyName}, we're excited to invite you to our wedding!</Text>
      <Text>{daysText[0]?.text ?? "Invitation details coming soon."}</Text>

      <Title order={2}>Guest details</Title>
      {initialGuests.map((guest) => (
        <Text key={guest.id}>
          {guest.firstname} {guest.surname}
        </Text>
      ))}

      <Title order={2}>Add plus ones</Title>
      <Text>
        You can invite up to {maxAdditionalGuests} additional{" "}
        {maxAdditionalGuests === 1 ? "guest" : "guests"}.
      </Text>

      <Space h="md"></Space>
      <Button>Submit RSVP</Button>
    </>
  );
}
