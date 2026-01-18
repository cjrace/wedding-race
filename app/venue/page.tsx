import { Title } from "@mantine/core";
import { Metadata } from "next";
import VenueContent from "./_venueContent";

export const metadata: Metadata = {
  title: "Venue information",
  description: "Details about the venue for our celebrations.",
  openGraph: {
    title: "Venue information | Wedding Race",
    description: "Details about the venue for our celebrations.",
  },
};

export default function VenuePage() {
  return (
    <>
      <Title order={1}>Venue information</Title>

      <VenueContent />
    </>
  );
}
