import { Title, Text, Space } from "@mantine/core";
import { Metadata } from "next";
import TimelineContent from "./_timelineContent";

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

      <Space h="lg" />

      <TimelineContent />
    </>
  );
}
