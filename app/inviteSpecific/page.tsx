import { Title } from "@mantine/core";
import { Metadata } from "next";
import InviteSpecificContent from "./_inviteSpecificContent";

export const metadata: Metadata = {
  title: "Invite specific",
  description: "Options for accommodation during our celebrations.",
  openGraph: {
    title: "Invite Specific | Wedding Race",
    description: "Options for accommodation during our celebrations.",
  },
};

export default function InvitePage() {
  return (
    <>
      <Title order={1}>Invite Specific</Title>

      <InviteSpecificContent />
    </>
  );
}
