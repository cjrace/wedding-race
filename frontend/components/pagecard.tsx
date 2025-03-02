"use client";

import { Card, Text, Image, Center } from "@mantine/core";

interface PageCardProps {
  imagePath: string;
  title: string;
  description: string;
  link: string;
}

export default function PageCard({
  imagePath,
  title,
  description,
  link,
}: PageCardProps) {
  return (
    <Card
      shadow="xs"
      p="xl"
      component="a"
      href={link}
      target="_blank"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Card.Section>
        <Center>
          <Image
            aria-hidden
            alt={title}
            src={imagePath}
            h={200}
            w="auto"
            fit="contain"
          />
        </Center>
      </Card.Section>
      <div style={{ flex: "1" }}>
        <Text fw={500} mt="md">
          {title}
        </Text>
        <Text c="dimmed">{description}</Text>
      </div>
    </Card>
  );
}
