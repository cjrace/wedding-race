import sql from "@/db/neon";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { inviteCode } = await req.json();
    if (!inviteCode || typeof inviteCode !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing invite code." },
        { status: 400 },
      );
    }
    const possible_ids_result = await sql`SELECT id FROM Invites`;
    const possible_ids = possible_ids_result.map((row: Record<string, any>) =>
      String(row.id),
    );
    const found = possible_ids.includes(inviteCode.trim().toLowerCase());
    return NextResponse.json({ success: found });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error." },
      { status: 500 },
    );
  }
}
