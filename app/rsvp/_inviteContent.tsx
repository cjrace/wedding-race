"use client";

import {
  Group,
  SimpleGrid,
  Space,
  TextInput,
  Button,
  Text,
} from "@mantine/core";

export default function InviteContent() {
  return (
    <>
      <SimpleGrid cols={1}>
        <Text>Enter your invite code below to access your RSVP form.</Text>
        <Group>
          <Space h="md" />
          <TextInput aria-label="Enter your invite code below to access your RSVP form" />
          <Button>Submit</Button>
          <Space h="md" />
        </Group>
      </SimpleGrid>
    </>
  );
}
