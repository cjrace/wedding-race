import { Title } from "@mantine/core";
import { Metadata } from "next";
import InviteContent from "./_inviteContent";

export const metadata: Metadata = {
  title: "RSVP",
  description: "Time to RSVP!",
  openGraph: {
    title: "RSVP | Wedding Race",
    description: "Time to RSVP!",
  },
};

export default async function InvitePage() {
  return (
    <>
      <Title order={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
        Time to RSVP!
      </Title>
      <InviteContent />
    </>
  );
}
