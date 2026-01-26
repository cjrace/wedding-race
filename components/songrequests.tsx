"use client";

import React from "react";
import { Text, Anchor, TextInput, Button, Divider } from "@mantine/core";
import styles from "@/styles/rsvp.module.css";

export default function SongRequests() {
  const [song, setSong] = React.useState("");
  const [artist, setArtist] = React.useState("");
  const [status, setStatus] = React.useState<string | null>(null);

  async function handleSongRequest(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await globalThis.fetch("/api/spotify-add", {
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
        !
      </Text>

      <div style={{ width: "100%", margin: "0 auto" }}>
        <iframe
          style={{ borderRadius: "15px", minHeight: 80, border: "none" }}
          src="https://open.spotify.com/embed/playlist/1xzE67dkT07HDsBP7JLi0D?utm_source=generator&theme=0"
          width="100%"
          height="152"
          aria-label="current wedding spotify playlist"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <Divider my="sm" />

      <Text px={0} mb="md">
        Fill out the form below to fire a request to Spotify to add the song to
        our playlist, it may take a few minutes to appear there.
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
          Submit song suggestion
        </Button>
      </form>
      {status && <Text mt="sm">{status}</Text>}
    </>
  );
}
