"use client";

import {
  Text,
  Divider,
  Grid,
  Box,
  Center,
  Flex,
  Anchor,
  Button,
} from "@mantine/core";
import Countdown from "@/components/countdown";
import Image from "next/image";
import Us from "@/public/images/cam-and-laura.png";
import playConfetti from "@/components/playconfetti";
import { IconConfetti } from "@tabler/icons-react";
import styles from "@/styles/rsvp.module.css";

export default function HomepageContent() {
  const weddingDateEnv = process.env.NEXT_PUBLIC_WEDDING_DATETIME
    ? new Date(process.env.NEXT_PUBLIC_WEDDING_DATETIME)
    : undefined;

  return (
    <>
      <Center>
        <Countdown date={weddingDateEnv ?? new Date("2095-08-08T19:17:08Z")} />
      </Center>

      <Divider my="md" />

      <Center>
        <Anchor
          href="/guest-information"
          style={{
            textDecoration: "none",
            width: "100%",
          }}
        >
          <Box
            bg="#FFD9D9"
            p="lg"
            mb="md"
            style={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              width: "100%",
              transition: "box-shadow 0.2s, background 0.2s, color 0.2s",
              cursor: "pointer",
            }}
            className={styles.rsvpInvertHover}
          >
            <Center>
              <Text
                fw={700}
                size="xl"
                style={{
                  color: "#242424",
                  letterSpacing: "1px",
                  transition: "color 0.2s",
                  textDecoration: "underline",
                }}
                className={styles.rsvpInvertHoverText}
              >
                It&apos;s almost time! View your guest information!
              </Text>
            </Center>
          </Box>
        </Anchor>
      </Center>

      <Divider my="md" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Center>
            <Image
              src={Us}
              alt="Cam and Laura dressed up fancy"
              loading="eager"
              style={{
                width: "100%",
                height: "auto",
                margin: "20px 0",
                borderRadius: "10px",
              }}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Flex
            align="center"
            justify="center"
            gap="md"
            direction={{ base: "column", md: "row" }}
            style={{ margin: "15px 0", fontFamily: "Courier New" }}
          >
            <Text
              style={{
                fontSize: "4rem",
                color: "#F9AA8E",
                padding: "0",
              }}
            >
              LAURA
            </Text>
            <Text
              style={{
                fontSize: "2rem",
                color: "#FFD9D9",
                padding: "0",
              }}
            >
              and
            </Text>
            <Text
              style={{
                fontSize: "4rem",
                color: "#F9AA8E",
                padding: "0",
              }}
            >
              CAM
            </Text>
          </Flex>

          <Box>
            <Text>
              Hey there! We&apos;re incredibly excited to get everyone together
              for a big knees-up on Tuesday{" "}
              {weddingDateEnv
                ? weddingDateEnv.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "TBD"}
              .
            </Text>

            <Text>
              Enter your invite code on the
              <Anchor
                href="/guest-information"
                style={{
                  padding: "0 0 0 4px", // force the anchor to match text spacing
                  textDecoration: "underline",
                }}
              >
                guest information
              </Anchor>{" "}
              page to find your personalised RSVP, the plan for the day, venue
              and accommodation details, the timeline, music requests, and
              everything else you need.
            </Text>

            <Text>
              Thanks for stopping by, we can&apos;t wait to celebrate with you!
            </Text>

            <Text>
              We built this website ourselves, feel free to check out the
              <Anchor
                href="https://github.com/cjrace/wedding-race"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0 0 0 4px", // force the anchor to match text spacing
                  textDecoration: "underline",
                }}
              >
                source code on GitHub
              </Anchor>
              .
            </Text>
          </Box>
          <Center>
            <Button
              variant="default"
              radius="lg"
              my="md"
              onClick={playConfetti}
              rightSection={<IconConfetti />}
            >
              Practice your confetti
            </Button>
          </Center>
        </Grid.Col>
      </Grid>

      <Divider my="md" />
    </>
  );
}
