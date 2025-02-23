import { Title, Text, Space } from "@mantine/core";
import { Metadata } from "next";
import TimelineContent from "./timelineContent";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Details of the timeline for our celebrations.",
  openGraph: {
    title: "Timeline | Wedding Race",
    description: "Details of the timeline for our celebrations.",
  },
};

export default function TimelinePage() {
  return (
    <>
      <Title order={1}>Timeline</Title>

      <Text>
        Our wedding celebration will be over three days. We&apos;d love for you
        to join us the night before and stay until the morning after if
        you&apos;re able. If that&apos;s not possible, no worries, just come for
        the wedding day.
      </Text>

      <Text>
        We&apos;re so excited to share what we have planned with you, and to see
        you there!
      </Text>

      <Text>
        This is a high level outline, we don&apos;t want to give it all away and
        it&apos;s still ages away so we may add or change stuff as we go...
      </Text>

      <Space h="lg" />

      <TimelineContent />
    </>
  );
}
