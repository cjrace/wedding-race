import sql from "@/db/neon";
import { notFound } from "next/navigation";
import { Title, Text, Divider, Space, Paper } from "@mantine/core";
import WeddingTimeline from "@/components/weddingTimeline";
import RsvpFormClient from "@/components/rsvpFormClient";
import SongRequests from "@/components/songrequests";
import GettingSoonLetter from "@/components/getting-soon-letter";

export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default async function YourInvitationPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = typeof params?.id === "string" ? params.id : "";

  const invite_result =
    await sql`SELECT partyname, maxguests, submitted, prewedding, children FROM Invites WHERE id = ${id}`;

  if (invite_result.length === 0) {
    return notFound();
  }

  const partyName = invite_result[0].partyname;
  const maxGuests = invite_result[0].maxguests;
  const submitted: boolean = invite_result[0].submitted;
  const preWedding: boolean = invite_result[0].prewedding;
  const children = invite_result[0].children;

  const guests =
    await sql`SELECT id, firstname, surname, rsvp, dietary, child, prewedding FROM Guests WHERE inviteid = ${id}`;

  const initialGuests = guests.map((guest: Record<string, any>) => ({
    id: guest.id,
    firstname: guest.firstname,
    surname: guest.surname,
    child: guest.child,
  }));

  const maxAdditionalGuests = Math.max(0, maxGuests - guests.length);

  return (
    <>
      <GettingSoonLetter />

      <Divider my="sm" />

      <section id="rsvp">
        {submitted ? (
          <>
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
                    {guest.rsvp
                      ? guest.prewedding
                        ? "Attending pre-wedding and wedding day"
                        : "Attending wedding day"
                      : "Not attending"}
                  </Text>
                  <Text px={15} pt={5} key={guest.id + "dietary"}>
                    Dietary Requirements: {guest.dietary || "None"}
                  </Text>
                </div>
              ))}

            <Text px={0}>
              If this looks wrong, or you want to make any changes, please let
              us know ASAP so we can update our details and reach out to the
              venue and catering team.
            </Text>
          </>
        ) : (
          <>
            <Title px={0} order={2}>
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
          </>
        )}
      </section>

      <Divider my="sm" />

      <section id="timeline">
        <Title px={0} order={2}>
          Your wedding timeline
        </Title>
        <WeddingTimeline preWedding={preWedding} />
      </section>

      <Divider my="sm" />

      <section id="requests">
        <Paper withBorder p="lg" my="md" style={{ borderColor: "#F9AA8E" }}>
          <Title px={0} order={2}>
            Music requests
          </Title>
          <Text px={0} mb="md">
            🎵 <strong>Help build the wedding playlist!</strong> Songs
            you&apos;d love to hear, songs that are guaranteed to get you on the
            dancefloor, songs we absolutely have to play — drop them all in
            below.
          </Text>
          <SongRequests inviteId={id} />
        </Paper>
      </section>

      <Divider my="sm" />

      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}
