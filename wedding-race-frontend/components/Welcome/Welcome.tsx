"use client";

import {
  Text,
  Container,
  Space,
  Divider,
  SimpleGrid,
  Box,
  Center,
  Image,
  Flex,
} from "@mantine/core";
import PageCard from "./pagecard";
import DaysToGo from "../DaysToGo/DaysToGo";
import { useEffect, useState } from "react";

export function Welcome() {
  const [weddingDate, setWeddingDate] = useState<Date>();

  useEffect(() => {
    const fetchWeddingDate = async () => {
      try {
        const response = await fetch("/api/weddingdate");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeddingDate(new Date(data.wedding_date));
      } catch (error) {
        console.log("Error fetching wedding date, reverting to back up date");
      }
    };

    fetchWeddingDate();
  }, []);

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
        <Text style={{ fontFamily: "Courier New", fontSize: "4rem" }}>
          LAURA
        </Text>
        <Text style={{ fontFamily: "Courier New", fontSize: "2rem" }}>and</Text>
        <Text style={{ fontFamily: "Courier New", fontSize: "4rem" }}>CAM</Text>
      </Flex>

      <Space h="md" />

      <Text ta="center">Countdown to ceremony!</Text>

      <Center>
        <DaysToGo date={weddingDate ?? new Date("2095-08-08T19:17:08Z")} />
      </Center>

      <Divider my="md" />

      <SimpleGrid cols={2}>
        <div>
          <Container>
            <Center>
              <Image
                radius="sm"
                src="images/cam-and-laura.png"
                h={400}
                w="auto"
                fit="contain"
                alt=""
              />
            </Center>
          </Container>
        </div>
        <div>
          <Box>
            <Text>
              Hey there! We&apos;re so excited to share this special journey
              with you. Right now, we&apos;ve got some high-level details up and
              running, but stay tuned—we&apos;ll be updating with more juicy
              info as the big day approaches.
            </Text>

            <Space h="md" />

            <Text>
              In the meantime, feel free to explore the navbar to find all you
              need to know about the event, accommodation, and those burning
              questions you might have in the FAQs.
            </Text>

            <Space h="md" />

            <Text>
              Thanks for stopping by, and we can&apos;t wait to celebrate with
              you!
            </Text>
          </Box>
        </div>
      </SimpleGrid>

      <Space h="md" />

      <SimpleGrid cols={3}>
        <div>
          <PageCard
            imagePath="images/tipi-outside.png"
            title="Accommodation"
            description="More detail for what is on this page"
            link="/accommodation"
          />
        </div>
        <div>
          <PageCard
            imagePath="images/tipi-outside.png"
            title="Timeline"
            description="More detail for what is on this page"
            link="/timeline"
          />
        </div>
        <div>
          <PageCard
            imagePath="images/tipi-outside.png"
            title="FAQs"
            description="More detail for what is on this page"
            link="/faqs"
          />
        </div>
      </SimpleGrid>
    </>
  );
}
