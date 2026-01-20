import sql from "@/db/neon";
import { notFound } from "next/navigation";
import { Title, Text, Divider, Space, Center, Button } from "@mantine/core";
import WeddingTimeline from "@/components/weddingTimeline";
import RsvpFormClient from "@/components/rsvpFormClient";
import playConfetti from "@/components/playconfetti";
import { IconConfetti } from "@tabler/icons-react";

export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

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
    await sql`SELECT partyname, maxguests, submitted, prewedding, children FROM Invites WHERE id = ${id}`;

  const submitted = invite_result[0].submitted;
  const preWedding = invite_result[0].prewedding;

  const guests =
    await sql`SELECT id, firstname, surname, rsvp, dietary, child FROM Guests WHERE inviteid = ${id}`;

  if (submitted) {
    return (
      <>
        <Title px={0} order={1}>
          RSVP to our wedding
        </Title>
        <Text px={0}>Thank you for your RSVP!</Text>
        <Text px={0}>
          On this page you'll find a copy of your response, information on
          booking accommodation, plus a copy of your wedding timeline.
        </Text>
        <Center>
          <Button
            variant="default"
            radius="lg"
            my="md"
            onClick={playConfetti}
            rightSection={<IconConfetti />}
          >
            Practice your confetti
          </Button>
        </Center>

        <Divider my="sm" />

        <Title px={0} order={2}>
          Your RSVP details
        </Title>
        <Text px={0} mb="md">
          We have received your response for the following guests:
        </Text>
        {[...guests]
          .sort((a, b) => a.id - b.id)
          .map((guest: Record<string, any>) => (
            <div
              key={guest.id}
              style={{
                marginBottom: 16,
                outline: "1px solid #c9c9c9",
                borderRadius: 4,
                padding: 0,
              }}
            >
              <Text px={15} pb={0} key={guest.id + "name"}>
                {guest.firstname} {guest.surname}:{" "}
                {guest.rsvp ? "Attending" : "Not Attending"}
              </Text>
              <Text px={15} pt={5} key={guest.id + "dietary"}>
                Dietary Requirements: {guest.dietary || "None"}
              </Text>
            </div>
          ))}

        <Text px={0}>
          If this looks wrong, or you want to make any changes, please let us
          know ASAP so we can update our details.
        </Text>

        <Divider my="sm" />

        <Title px={0} order={2}>
          Booking accommodation
        </Title>
        <Text px={0} mb="md">
          Some accommodation information will go here.
        </Text>

        {preWedding && (
          <>
            <Divider my="sm" />

            <Title px={0} order={2}>
              Quiz round suggestions
            </Title>
            <Text px={0} mb="md">
              Suggestions for the pre-wedding quiz will go here.
            </Text>
          </>
        )}

        <Divider my="sm" />

        <Title px={0} order={2}>
          Music requests
        </Title>
        <Text px={0} mb="md">
          Add any music requests to our guest playlist on Spotify.
        </Text>

        <Divider my="sm" />

        <Title px={0} order={2}>
          Your wedding timeline
        </Title>
        <WeddingTimeline preWedding={preWedding} />

        {/* Extra space at bottom to prevent overlap with Back to Top button */}

        <Space h="xl" />
        <Space h="xl" />
      </>
    );
  }

  // Main RSVP form ===========================================================
  const partyName = invite_result[0].partyname;
  const maxGuests = invite_result[0].maxguests;
  const children = invite_result[0].children;

  const initialGuests = guests.map((guest: Record<string, any>) => ({
    id: guest.id,
    firstname: guest.firstname,
    surname: guest.surname,
    child: guest.child,
  }));

  const maxAdditionalGuests = Math.max(0, maxGuests - guests.length);

  return (
    <>
      <Title px={0} order={1}>
        RSVP to our wedding
      </Title>
      <RsvpFormClient
        partyID={id}
        partyName={partyName}
        preWedding={preWedding}
        guestInformation={initialGuests}
        maxAdditionalGuests={maxAdditionalGuests}
        children={children}
      />
      {/* Extra space at bottom to prevent overlap with Back to Top button */}
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}
