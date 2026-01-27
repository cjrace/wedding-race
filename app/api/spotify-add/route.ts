import { NextRequest, NextResponse } from "next/server";
import sql from "../../../db/neon";

export async function POST(req: NextRequest) {
  try {
    const { inviteId, song, artist } = await req.json();
    if (!inviteId || !song || !artist) {
      return NextResponse.json(
        { error: "Missing inviteId, song, or artist" },
        { status: 400 },
      );
    }
    await sql`INSERT INTO "song-suggestions" ("inviteId", "song", "artist") VALUES (${inviteId}, ${song}, ${artist})`;
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error && error.message ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
