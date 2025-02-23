import AccommodationContent from "./_accommodationContent";
import { Title, Space } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation",
  description: "Options for accommodation during our celebrations.",
  openGraph: {
    title: "Accommodation | Wedding Race",
    description: "Options for accommodation during our celebrations.",
  },
};

export default function AccommodationPage() {
  return (
    <>
      <Title order={1}>Accommodation</Title>

      <Space h="lg" />

      <AccommodationContent />
    </>
  );
}
