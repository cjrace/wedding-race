import { Title } from "@mantine/core";
import { Metadata } from "next";
import InviteContent from "./_inviteContent";

export const metadata: Metadata = {
  title: "Invite",
  description: "Options for accommodation during our celebrations.",
  openGraph: {
    title: "Invite | Wedding Race",
    description: "Options for accommodation during our celebrations.",
  },
};

export default function InvitePage() {
  return (
    <>
      <Title order={1}>Invite</Title>

      <InviteContent />
    </>
  );
}
