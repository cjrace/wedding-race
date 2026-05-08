"use client";

import { Title, Text, Center, Button } from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";
import playConfetti from "@/components/playconfetti";

export default function WelcomeSection({ submitted }: { submitted: boolean }) {
  return (
    <section id="welcome">
      <Title px={0} order={1}>
        Your invitation
      </Title>
      {submitted ? (
        <Text px={0}>
          Thank you for your RSVP! Everything you need to know ahead of the big
          day is below, so scroll on down.
        </Text>
      ) : (
        <Text px={0}>
          Welcome! You&apos;re cutting it very fine! Below you&apos;ll find the
          RSVP form along with everything you need to know about the day. Have a
          read through, then let us know if you can make it.
        </Text>
      )}
      <Center>
        <Button
          variant="default"
          radius="lg"
          my="md"
          onClick={playConfetti}
          rightSection={<IconConfetti />}
        >
          Practice your confetti
        </Button>
      </Center>
    </section>
  );
}
