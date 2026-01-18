import { NextRequest, NextResponse } from "next/server";
import sql from "@/db/neon";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const partyID = formData.get("partyID");
    const guestCount = Number(formData.get("guestCount"));

    if (!partyID || isNaN(guestCount)) {
      return NextResponse.json(
        { success: false, error: "Invalid input." },
        { status: 400 },
      );
    }

    // Update each original guest's RSVP and dietary requirements
    for (let i = 0; i < guestCount; i++) {
      const id = formData.get(`guest-${i}-id`);
      const attending = formData.get(`guest-${i}-attending`);
      const dietary = formData.get(`guest-${i}-dietary`);
      if (!id) continue;
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
      const child = formData.get(`additional-${additionalIdx}-child`);
      if (firstname && surname) {
        await sql`
          INSERT INTO Guests (inviteid, firstname, surname, rsvp, dietary, child)
          VALUES (${partyID}, ${firstname}, ${surname}, ${attending}, ${dietary}, ${child})
        `;
      }
      additionalIdx++;
    }

    await sql`
      UPDATE Invites
      SET submitted = true,
          contactemail = ${formData.get("contact_email")},
          contactnumber = ${formData.get("contact_phone")}
      WHERE id = ${partyID}
    `;

    return NextResponse.json({ success: true, partyID });
  } catch (error) {
    console.error("RSVP submission error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred while submitting RSVP." },
      { status: 500 },
    );
  }
}
