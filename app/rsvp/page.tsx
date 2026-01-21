import { Title } from "@mantine/core";
import { Metadata } from "next";
import InviteContent from "./_inviteContent";
import sql from "@/db/neon";

export const metadata: Metadata = {
  title: "RSVP",
  description: "Time to RSVP!",
  openGraph: {
    title: "RSVP | Wedding Race",
    description: "Time to RSVP!",
  },
};

export default async function InvitePage() {
  const possible_ids_result = await sql`SELECT id FROM Invites`;
  const possible_ids = possible_ids_result.map((row: Record<string, any>) =>
    String(row.id),
  );

  return (
    <>
      <Title order={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
        Time to RSVP!
      </Title>

      <InviteContent possibleIds={possible_ids} />
    </>
  );
}
