import { NextRequest, NextResponse } from "next/server";
import sql from "@/db/neon";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const partyID = formData.get("partyID");
  const guestCount = Number(formData.get("guestCount"));

  // Update each original guest's RSVP and dietary requirements
  for (let i = 0; i < guestCount; i++) {
    const id = formData.get(`guest-${i}-id`);
    const attending = formData.get(`guest-${i}-attending`);
    const dietary = formData.get(`guest-${i}-dietary`);
    await sql`
      UPDATE Guests
      SET rsvp = ${attending}, dietary = ${dietary}
      WHERE id = ${id}
    `;
  }

  // Handle additional guests
  let additionalIdx = 0;
  while (formData.get(`additional-${additionalIdx}-firstname`)) {
    const firstname = formData.get(`additional-${additionalIdx}-firstname`);
    const surname = formData.get(`additional-${additionalIdx}-surname`);
    const attending = formData.get(`additional-${additionalIdx}-attending`);
    const dietary = formData.get(`additional-${additionalIdx}-dietary`);
    if (firstname && surname) {
      await sql`
        INSERT INTO Guests (inviteid, firstname, surname, rsvp, dietary)
        VALUES (${partyID}, ${firstname}, ${surname}, ${attending}, ${dietary})
      `;
    }
    additionalIdx++;
  }

  await sql`
    UPDATE Invites
    SET submitted = true
    WHERE id = ${partyID}
  `;

  // Redirect or return JSON
  return NextResponse.json({ success: true, partyID });
}
