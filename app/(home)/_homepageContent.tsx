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
import PageCard from "@/components/pagecard";
import Countdown from "@/components/countdown";
import Image from "next/image";
import Us from "@/public/images/cam-and-laura.png";
import Village from "@/public/images/village.png";
import BreakfastTable from "@/public/images/breakfast-tables.png";
import FAQ from "@/public/images/faq.png";
import playConfetti from "@/components/playconfetti";
import { IconConfetti } from "@tabler/icons-react";

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
          href="/rsvp"
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
              transition: "box-shadow 0.2s",
              cursor: "pointer",
            }}
          >
            <Center>
              <Text
                fw={700}
                size="xl"
                style={{
                  color: "#000",
                  letterSpacing: "1px",
                }}
              >
                🎉 Time to RSVP! Click here to let us know you&apos;re coming 🎉
              </Text>
            </Center>
          </Box>
        </Anchor>
      </Center>

      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Center>
            <Image
              src={Us}
              alt="Cam and Laura dressed up fancy"
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
              for a big knees-up on the{" "}
              {weddingDateEnv
                ? weddingDateEnv.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "TBD"}
              . Right now, we&apos;ve got some high-level details up and
              running, but stay tuned as we&apos;ll be updating with more juicy
              info as the big day approaches.
            </Text>

            <Text>
              In the meantime, feel free to explore the website to find all you
              need to know about the event, accommodation, and those burning
              questions you might have in the FAQs.
            </Text>

            <Text>
              Thanks for stopping by, and we can&apos;t wait to celebrate with
              you!
            </Text>

            <Text>
              We built this website ourselves, feel free to check out the
              <Anchor
                href="https://github.com/cjrace/wedding-race"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0 0 0 4px", // force the anchor to match text spacing
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

      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <PageCard
            image={Village}
            title="Accommodation"
            description="Want to plan ahead for where to rest your head?"
            link="/accommodation"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <PageCard
            image={BreakfastTable}
            title="RSVP"
            description="Tell us you're coming and any preferences you have!"
            link="/rsvp"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <PageCard
            image={FAQ}
            title="FAQs"
            description="Got a question? We might have an answer!"
            link="/faqs"
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
