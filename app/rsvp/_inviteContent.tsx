"use client";

import {
  Group,
  Stack,
  TextInput,
  Button,
  Text,
  Space,
  Box,
} from "@mantine/core";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Lola from "@/public/images/Lola.png";
import styles from "@/styles/rsvp.module.css";

export default function InviteContent() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const trimmedValue = inputValue.trim();
    try {
      const res = await globalThis.fetch("/api/checkInvite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode: trimmedValue.toLowerCase() }),
      });
      const data = await res.json();
      if (data.success) {
        router.replace(`/rsvp/${trimmedValue.toLowerCase()}`);
      } else {
        setError(
          "Invite code not found. Contact us if you believe this is an error.",
        );
        setLoading(false);
      }
    } catch {
      setError("Server error. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <Stack>
        <Text id="invite-code-description" px={0}>
          Enter your invite code below to access your RSVP form and view your
          itinerary.
        </Text>
        <form onSubmit={handleSubmit}>
          <Group>
            <TextInput
              px={0}
              aria-describedby="invite-code-description"
              aria-label="Enter invite code"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value.trim());
                if (error) setError(null);
              }}
              error={false}
              style={{ width: "65%" }}
              disabled={loading}
            />
            <Button
              type="submit"
              variant="filled"
              style={{ width: "30%" }}
              className={styles.rsvpInvertHoverButton}
              loading={loading}
              disabled={loading}
            >
              Submit
            </Button>
          </Group>
          {error && (
            <Box mt="xs" p="sm" bg="red.9" style={{ borderRadius: 6 }}>
              <Text c="white" size="sm">
                {error}
              </Text>
            </Box>
          )}
        </form>
      </Stack>

      <Space h="xl" />

      <Image
        src={Lola}
        alt="Lola invites you to RSVP"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
      />
    </>
  );
}
