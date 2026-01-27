import { NextRequest, NextResponse } from "next/server";
import sql from "../../../db/neon";

export async function POST(req: NextRequest) {
  try {
    const { inviteId, suggestion } = await req.json();
    if (!inviteId || !suggestion) {
      return NextResponse.json(
        { error: "Missing inviteId or suggestion" },
        { status: 400 },
      );
    }
    await sql`INSERT INTO "quiz-suggestions" ("inviteId", "suggestion") VALUES (${inviteId}, ${suggestion})`;
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error && error.message ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
