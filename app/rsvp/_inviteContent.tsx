"use client";

import { Group, Stack, TextInput, Button, Text, Space } from "@mantine/core";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Lola from "@/public/images/Lola.png";

interface InviteContentProps {
  possibleIds: string[];
}

export default function InviteContent({ possibleIds }: InviteContentProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      <Stack>
        <Text id="invite-code-description">
          Enter your invite code below to access your RSVP form and view your
          itinerary.
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!possibleIds.includes(inputValue.trim())) {
              setError(
                "Invite code not found. Contact us if you believe this is an error.",
              );
            } else {
              setError(null);
              router.push(`/rsvp/${inputValue.trim()}`);
            }
          }}
        >
          <Group>
            <TextInput
              aria-describedby="invite-code-description"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
                if (error) setError(null);
              }}
              error={error}
              style={{ width: "50%" }}
            />
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Stack>

      <Space h="xl" />

      <Image
        src={Lola}
        alt="Lola"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
      />
    </>
  );
}
