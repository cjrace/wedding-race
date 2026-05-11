import sql from "@/db/neon";
import { notFound } from "next/navigation";
import { Title, Text, Divider, Space } from "@mantine/core";
import GettingSoonLetter from "@/components/gettingSoonLetter";

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
    await sql`SELECT partyname, prewedding FROM Invites WHERE id = ${id}`;

  if (invite_result.length === 0) {
    return notFound();
  }

  const partyName: string = invite_result[0].partyname;
  const preWedding: boolean = invite_result[0].prewedding;

  const guests =
    await sql`SELECT id, firstname, surname, rsvp, dietary, child, prewedding FROM Guests WHERE inviteid = ${id}`;

  return (
    <>
      <section id="rsvp">
        <Title px={0} order={2}>
          Your RSVP details
        </Title>
        <Text px={0} mb="md">
          Here is a quick reminder of your RSVP details:
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
          If this looks wrong, or you want to make any changes, please let us
          know ASAP so we can update our details and reach out to the venue and
          catering team.
        </Text>
      </section>
      <Divider my="sm" />
      <GettingSoonLetter
        preWedding={preWedding}
        partyName={partyName}
        inviteId={id}
      />

      <Divider my="sm" />

      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}
