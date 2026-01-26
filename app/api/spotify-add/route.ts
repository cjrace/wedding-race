import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;
const playlist_id = process.env.SPOTIFY_PLAYLIST_ID!;

async function getAccessToken() {
  const res = await globalThis.fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        globalThis.Buffer.from(client_id + ":" + client_secret).toString(
          "base64",
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new globalThis.URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { song, artist } = await req.json();
    const access_token = await getAccessToken();

    // Search for the track
    const searchRes = await globalThis.fetch(
      `https://api.spotify.com/v1/search?q=track:${encodeURIComponent(song)}%20artist:${encodeURIComponent(artist)}&type=track&limit=1`,
      {
        headers: { Authorization: `Bearer ${access_token}` },
      },
    );
    const searchData = await searchRes.json();
    const track = searchData.tracks?.items?.[0];
    if (!track) {
      return NextResponse.json(
        { success: false, error: "Track not found" },
        { status: 404 },
      );
    }

    // Add to playlist
    const addRes = await globalThis.fetch(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uris: [track.uri] }),
      },
    );
    if (!addRes.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to add to playlist" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
