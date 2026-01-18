"use client";

import {
  Group,
  Stack,
  Container,
  TextInput,
  Button,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface InviteContentProps {
  possibleIds: string[];
}

export default function InviteContent({ possibleIds }: InviteContentProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      <Container size="xs">
        <Stack gap="xl">
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
              />
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Stack>
      </Container>
    </>
  );
}
