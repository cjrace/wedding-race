import { Text } from "@mantine/core";

export default function InviteText({ preWedding }: { preWedding: boolean }) {
  const inviteText = preWedding
    ? "We’re excited to officially invite you to our wedding! The celebration runs over three days, with pre‑wedding partying at our on‑site ‘wedding village’ the evening before and breakfast together the morning after. We’d love you to join us for the full three‑day party if you can — but if not, no worries at all, just come for as much as you’re able."
    : "We are delighted to officially invite you to our wedding day on the 9th June 2026!";

  return <Text>{inviteText}</Text>;
}

