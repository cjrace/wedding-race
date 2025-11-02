"use client";

import { Card, Text, Box, Overlay } from "@mantine/core";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import Image from "next/image";

interface OverlayCardProps {
  cardKey: string;
  image: StaticImport;
  overlay: string;
}

export default function OverlayCard({
  cardKey,
  image,
  overlay,
}: OverlayCardProps) {
  const [overlayVisible, setOverlayVisible] = useState<{
    [cardKey: string]: boolean;
  }>({});
  const [isHovered, setIsHovered] = useState(false);

  const handleOverlayToggle = (cardKey: string) => {
    setOverlayVisible((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  return (
    <div data-testid={cardKey}>
      <Card
        onClick={() => handleOverlayToggle(cardKey)}
        shadow="sm"
        p="lg"
        style={{
          position: "relative",
          cursor: "pointer",
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.1)" : "",
          transition: "background-color 0.3s ease",
          borderRadius: "10px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image}
          aria-hidden
          alt=""
          style={{
            maxWidth: "100%",
            height: "auto",
            alignSelf: "center",
            borderRadius: "10px",
          }}
        />
        {overlayVisible[cardKey] && (
          <Overlay color="rgba(0, 0, 0, 0.6)" opacity={1} zIndex={0}>
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <Text style={{ padding: "0" }}>{overlay}</Text>
            </Box>
          </Overlay>
        )}
      </Card>
    </div>
  );
}
