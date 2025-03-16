"use client";

import { Card, Text, Image, Box, Overlay } from "@mantine/core";
import { useState, useRef } from "react";

interface OverlayCardProps {
  cardKey: string;
  imagePath: string;
  overlay: string;
}

export default function OverlayCard({
  cardKey,
  imagePath,
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
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.1)" : "", // Change background on hover
          transition: "background-color 0.3s ease", // Smooth transition
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          radius="sm"
          src={imagePath}
          height="auto"
          width="100%"
          fit="contain"
          alt=""
          style={{ maxWidth: "100%", height: "auto" }}
        />
        {overlayVisible[cardKey] && (
          <Overlay color="rgba(0, 0, 0, 0.6)" opacity={1} zIndex={5}>
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Text style={{ padding: "1px" }}>{overlay}</Text>
            </Box>
          </Overlay>
        )}
      </Card>
    </div>
  );
}
