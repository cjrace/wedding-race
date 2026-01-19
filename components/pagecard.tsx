"use client";

import { Card, Text, Center } from "@mantine/core";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import { myColor } from "../styles/theme";

interface PageCardProps {
  image: StaticImport;
  title: string;
  description: string;
  link: string;
}

export default function PageCard({
  image,
  title,
  description,
  link,
}: PageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      shadow="xs"
      p="xl"
      component="a"
      href={link}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
        cursor: "pointer",
        backgroundColor: isHovered ? "rgba(0, 0, 0, 0.1)" : "",
        transition: "background-color 0.3s ease",
        borderRadius: "10px",
        outline: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={(e) =>
        (e.currentTarget.style.outline = `2px solid ${myColor[2]}`)
      }
      onBlur={(e) => (e.currentTarget.style.outline = "none")}
    >
      <Card.Section>
        <Center>
          <Image
            aria-hidden
            alt={title}
            src={image}
            style={{
              width: "90%",
              height: "auto",
              alignSelf: "center",
              borderRadius: "10px",
            }}
          />
        </Center>
      </Card.Section>
      <div style={{ flex: "1" }}>
        <Text fw={500} mt="md" style={{ padding: 0 }}>
          {title}
        </Text>
        <Text c="gray.5" style={{ padding: 0 }}>
          {description}
        </Text>
      </div>
    </Card>
  );
}
