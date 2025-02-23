import { Text, Container, Space, Image, Flex } from "@mantine/core";
import Homepage from "./homepage";

export default function HomePage() {
  return (
    <>
      <Container style={{ width: "100%", padding: 0 }}>
        <Image
          radius="sm"
          src="images/tipi-outside-arty-overlay.png"
          alt="Welcome to the Race Wedding"
          style={{ width: "100%", height: "auto" }}
        />
      </Container>

      <Space h="md" />

      <Flex align="center" justify="center" gap="md">
        <Text
          style={{
            fontFamily: "Courier New",
            fontSize: "4rem",
            color: "#F9AA8E",
          }}
        >
          LAURA
        </Text>
        <Text
          style={{
            fontFamily: "Courier New",
            fontSize: "2rem",
            color: "#FFD9D9",
          }}
        >
          and
        </Text>
        <Text
          style={{
            fontFamily: "Courier New",
            fontSize: "4rem",
            color: "#F9AA8E",
          }}
        >
          CAM
        </Text>
      </Flex>

      <Space h="md" />

      <Homepage />
    </>
  );
}
