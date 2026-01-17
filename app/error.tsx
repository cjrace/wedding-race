"use client";

import { useEffect } from "react";
import { Container, Title, Button, Stack } from "@mantine/core";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Container size="xs">
        <Stack gap="xl">
          <Title ta="center">We can't find that page!</Title>
          <Button component="a" href="/" variant="default">
            Return home
          </Button>
        </Stack>
      </Container>
    </>
  );
}
