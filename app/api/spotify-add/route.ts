import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { song, artist } = await req.json();

    console.log("Received song request:", { song, artist });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
