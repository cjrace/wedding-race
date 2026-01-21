// Helper to normalize child value to boolean
function isChildValue(value: unknown): boolean {
  return value === "true" || value === "1" || value === 1 || value === true;
}

interface RsvpResponse {
  success: boolean;
  partyID?: string;
  error?: string;
}

/**
 * Handles RSVP form submission.
 * Returns { success: true, partyID } on success, or { success: false, error } on failure.
 */
import sql from "@/db/neon";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<RsvpResponse>> {
  try {
    const formData = await req.formData();
    const partyID = formData.get("partyID");
    const guestCountRaw = formData.get("guestCount");
    const guestCount = Number(guestCountRaw);

    // Validate guestCount: must be a non-negative integer
    if (
      !partyID ||
      isNaN(guestCount) ||
      !Number.isInteger(guestCount) ||
      guestCount < 0
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input: guestCount must be a non-negative integer.",
        },
        { status: 400 },
      );
    }

    // Update each original guest's RSVP, dietary requirements, child status, and attendance
    for (let i = 0; i < guestCount; i++) {
      const id = formData.get(`guest-${i}-id`);
      const attending = formData.get(`guest-${i}-attending`); // can be yes, no, yes-prewedding, yes-wedding
      // Validate attending value for original guests
      const validAttendingValues = [
        "yes-prewedding",
        "yes-wedding",
        "yes",
        "no",
      ];
      const attendingStr = typeof attending === "string" ? attending : "";
      if (attending && !validAttendingValues.includes(attendingStr)) {
        console.warn(
          `Skipping guest update at index ${i}: invalid attending value '${attending}'`,
        );
        continue;
      }
      const dietary = formData.get(`guest-${i}-dietary`);
      const childRaw = formData.get(`guest-${i}-child`);
      const child = isChildValue(childRaw);

      let attendingPreWedding = null;
      let attendingWedding = null;
      if (attending === "yes-prewedding") {
        attendingPreWedding = true;
        attendingWedding = true;
      } else if (attending === "yes-wedding") {
        attendingPreWedding = false;
        attendingWedding = true;
      } else if (attending === "yes") {
        attendingPreWedding = null; // not applicable
        attendingWedding = true;
      } else {
        attendingPreWedding = false;
        attendingWedding = false;
      }
      if (!id) {
        console.warn(`Skipping guest update: missing id for guest index ${i}`);
        continue;
      }
      await sql`
        UPDATE Guests
        SET dietary = ${dietary}, child = ${child}, prewedding = ${attendingPreWedding}, rsvp = ${attendingWedding}
        WHERE id = ${id}
      `;
    }

    // Handle additional guests (including children)
    let additionalIdx = 0;
    while (formData.get(`additional-${additionalIdx}-firstname`)) {
      const firstname = formData.get(`additional-${additionalIdx}-firstname`);
      const surname = formData.get(`additional-${additionalIdx}-surname`);
      const attending = formData.get(`additional-${additionalIdx}-attending`);
      // Validate attending value
      const validAttendingValues = [
        "yes-prewedding",
        "yes-wedding",
        "yes",
        "no",
      ];
      const attendingStr = typeof attending === "string" ? attending : "";
      if (attending && !validAttendingValues.includes(attendingStr)) {
        console.warn(
          `Skipping additional guest at index ${additionalIdx}: invalid attending value '${attending}'`,
        );
        additionalIdx++;
        continue;
      }
      const dietary = formData.get(`additional-${additionalIdx}-dietary`);
      const childRaw = formData.get(`additional-${additionalIdx}-child`);
      const child = isChildValue(childRaw);
      let attendingPreWedding = null;
      let attendingWedding = null;
      if (attending === "yes-prewedding") {
        attendingPreWedding = true;
        attendingWedding = true;
      } else if (attending === "yes-wedding") {
        attendingPreWedding = false;
        attendingWedding = true;
      } else if (attending === "yes") {
        attendingPreWedding = null;
        attendingWedding = true;
      } else {
        attendingPreWedding = false;
        attendingWedding = false;
      }
      if (firstname && surname) {
        await sql`
          INSERT INTO Guests (inviteid, firstname, surname, rsvp, dietary, child, prewedding)
          VALUES (${partyID}, ${firstname}, ${surname}, ${attendingWedding}, ${dietary}, ${child}, ${attendingPreWedding})
        `;
      }
      additionalIdx++;
    }

    // Handle additional children (if any, e.g. child-additional-X)
    let childAdditionalIdx = 0;
    while (formData.get(`child-additional-${childAdditionalIdx}-firstname`)) {
      const firstname = formData.get(
        `child-additional-${childAdditionalIdx}-firstname`,
      );
      const surname = formData.get(
        `child-additional-${childAdditionalIdx}-surname`,
      );
      const attending = formData.get(
        `child-additional-${childAdditionalIdx}-attending`,
      );
      const dietary = formData.get(
        `child-additional-${childAdditionalIdx}-dietary`,
      );
      const child = true;
      let attendingPreWedding = null;
      let attendingWedding = null;
      if (attending === "yes-prewedding") {
        attendingPreWedding = true;
        attendingWedding = true;
      } else if (attending === "yes-wedding") {
        attendingPreWedding = false;
        attendingWedding = true;
      } else if (attending === "yes") {
        attendingPreWedding = null;
        attendingWedding = true;
      } else {
        attendingPreWedding = false;
        attendingWedding = false;
      }
      if (firstname && surname) {
        await sql`
          INSERT INTO Guests (inviteid, firstname, surname, rsvp, dietary, child, prewedding)
          VALUES (${partyID}, ${firstname}, ${surname}, ${attendingWedding}, ${dietary}, ${child}, ${attendingPreWedding})
        `;
      }
      childAdditionalIdx++;
    }

    await sql`
      UPDATE Invites
      SET submitted = true
      WHERE id = ${partyID}
    `;

    return NextResponse.json({
      success: true,
      partyID: typeof partyID === "string" ? partyID : undefined,
    });
  } catch (error) {
    // Add more context to the error log, but avoid in production
    if (process.env.NODE_ENV !== "production") {
      console.error("RSVP submission error in /api/submitrsvp/route.ts:", {
        error,
        step: "Processing RSVP submission",
        time: new Date().toISOString(),
        stack: error instanceof Error ? error.stack : undefined,
      });
    } else {
      console.error(
        "RSVP submission error in /api/submitrsvp/route.ts: An error occurred during RSVP submission.",
      );
    }
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while submitting RSVP. Please contact us.",
      },
      { status: 500 },
    );
  }
}
