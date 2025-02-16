import { Text, Title } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to the{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "orange", to: "yellow" }}
        >
          Race Wedding
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        We&apos;re excited to say that a fancy wedding website is coming soon!
        Stay tuned for updates.
      </Text>
    </>
  );
}
