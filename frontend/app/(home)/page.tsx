import { Container, Image, Space } from "@mantine/core";
import HomepageContent from "./_homepageContent";

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

      <HomepageContent />
    </>
  );
}
