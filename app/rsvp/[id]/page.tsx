"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import sql from "../../../db/neon";

export default async function Page() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";

  const possible_ids_result = await sql`SELECT id FROM Invites`;
  const possible_ids = possible_ids_result.map((row: Record<string, any>) =>
    String(row.id),
  );

  if (!possible_ids.includes(id)) {
    notFound();
  }

  return (
    <main>
      <h1>RSVP Page</h1>
      <p>
        Your invite code: <strong>{id}</strong>
      </p>
    </main>
  );
}
