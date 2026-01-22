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

interface InviteContentProps {
  possibleIds: string[];
}

export default function InviteContent({ possibleIds }: InviteContentProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <Stack>
        <Text id="invite-code-description" px={0}>
          Enter your invite code below to access your RSVP form and view your
          itinerary.
        </Text>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!possibleIds.includes(inputValue.trim().toLowerCase())) {
              setError(
                "Invite code not found. Contact us if you believe this is an error.",
              );
            } else {
              setError(null);
              setLoading(true);
              window.setTimeout(() => {
                router.push(`/rsvp/${inputValue.trim().toLowerCase()}`);
                router.refresh();
              }, 50);
            }
          }}
        >
          <Group>
            <TextInput
              px={0}
              aria-describedby="invite-code-description"
              aria-label="Enter invite code"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
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
