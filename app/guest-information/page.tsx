import { Title, Text } from "@mantine/core";
import { Metadata } from "next";
import InviteContent from "./_inviteContent";

export const metadata: Metadata = {
  title: "Guest Information",
  description:
    "Enter your invite code to find your personalised guest information.",
  openGraph: {
    title: "Guest Information | Wedding Race",
    description:
      "Enter your invite code to find your personalised guest information.",
  },
};

export default async function YourInvitationPage() {
  return (
    <>
      <Title order={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
        Guest Information
      </Title>
      <Text px={0}>
        View your RSVP details, the plan for the day, venue and accommodation
        details, the wedding timeline, music requests, and more.
      </Text>
      <InviteContent />
    </>
  );
}
