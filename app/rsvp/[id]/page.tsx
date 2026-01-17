import sql from "../../../db/neon";
import NotFound from "@/app/not-found";
import { Title, Text } from "@mantine/core";

export default async function InvitePage(props: {
  params: Promise<{ id: string }>;
}) {
  const id =
    typeof (await props.params)?.id === "string" ? (await props.params).id : "";

  const possible_ids_result = await sql`SELECT id FROM Invites`;
  const possible_ids = possible_ids_result.map((row: Record<string, any>) =>
    String(row.id),
  );

  if (!possible_ids.includes(id)) {
    return NotFound();
  }

  const invite_result = await sql`SELECT * FROM Invites WHERE id = ${id}`;
  const invite = invite_result[0];

  return (
    <>
      <Title order={1}>RSVP for the Wedding of Race</Title>
      <Text>For debugging, invite ID: {id}</Text>
      <Text>
        Hey {invite.partyname}, we're excited to invite you to our wedding!
      </Text>
    </>
  );
}
