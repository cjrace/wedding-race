import { Title, Space } from "@mantine/core";
import FAQsContent from "./faqsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Other frequently asked questions.",
  openGraph: {
    title: "FAQs | Wedding Race",
    description: "Other frequently asked questions.",
  },
};

export default function FAQsPage() {
  return (
    <>
      <Title order={1}>Frequently Asked Questions</Title>

      <Space h="lg" />

      <FAQsContent />
    </>
  );
}
