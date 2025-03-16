import { Container, Image, Space } from "@mantine/core";
import HomepageContent from "./_homepageContent";

export default function HomePage() {
  return (
    <>
      <h1>
        <span
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            border: 0,
          }}
        >
          Wedding Race
        </span>
        <Container
          style={{ width: "100%", padding: 0, margin: 0, maxWidth: "100%" }}
        >
          <Image
            radius="sm"
            src="images/tipi-outside-arty-overlay.svg"
            alt="Welcome to the Race Wedding"
            width="100%"
            style={{ width: "100%", height: "auto" }}
          />
        </Container>
      </h1>

      <Space h="md" />

      <HomepageContent />
    </>
  );
}
