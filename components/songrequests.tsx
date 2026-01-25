"use client";

import React from "react";
import { Text, Anchor, TextInput, Button } from "@mantine/core";
import styles from "@/styles/rsvp.module.css";

export default function SongRequests() {
  const [song, setSong] = React.useState("");
  const [artist, setArtist] = React.useState("");
  const [status, setStatus] = React.useState<string | null>(null);

  async function handleSongRequest(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/spotify-add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ song, artist }),
      });
      if (res.ok) {
        setStatus(`Request submitted for "${song}" by "${artist}"!`);
        setSong("");
        setArtist("");
      } else {
        setStatus("Failed to submit request.");
      }
    } catch {
      setStatus("Error submitting request.");
    }
  }
  return (
    <>
      <Text px={0} mb="md">
        Suggest a song and artist to add to our{" "}
        <Anchor
          href="https://open.spotify.com/playlist/1xzE67dkT07HDsBP7JLi0D?si=0b143c3443514fbf&pt=558d73cbe3d3567429febd79950a8536"
          target="_blank"
          px={0}
          style={{ textDecoration: "underline" }}
        >
          wedding Spotify playlist
        </Anchor>
        ! This will fire a request to Spotify to add the song to our playlist.
        It may take a few minutes to appear there.
      </Text>
      <form onSubmit={handleSongRequest}>
        <TextInput
          label="Song Title"
          px={0}
          value={song}
          onChange={(e) => setSong(e.currentTarget.value)}
          required
          mb="sm"
        />
        <TextInput
          label="Artist"
          px={0}
          value={artist}
          onChange={(e) => setArtist(e.currentTarget.value)}
          required
          mb="sm"
        />
        <Button
          type="submit"
          color="myColor"
          fullWidth
          className={styles.rsvpInvertHoverButton}
        >
          Submit suggestion
        </Button>
      </form>
      {status && <Text mt="sm">{status}</Text>}
    </>
  );
}
