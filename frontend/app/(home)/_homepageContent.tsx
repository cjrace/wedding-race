"use client";

import {
  Text,
  Container,
  Space,
  Divider,
  Grid,
  Box,
  Center,
  Image,
  Flex,
} from "@mantine/core";
import PageCard from "@/components/pagecard";
import Countdown from "@/components/countdown";

export default function HomepageContent() {
  /* API call if we want to go back to fetching it from the server
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
  */

  const weddingDateEnv = process.env.NEXT_PUBLIC_WEDDING_DATETIME
    ? new Date(process.env.NEXT_PUBLIC_WEDDING_DATETIME)
    : undefined;

  return (
    <>
      

      

      {/* 

      <Space h="sm" />
      
      <Text ta="center">Countdown to our ceremony!</Text>

      */}

      <Center>
        <Countdown date={weddingDateEnv ?? new Date("2095-08-08T19:17:08Z")} />
      </Center>

      <Divider my="md" />

      <Grid>
        <Grid.Col span={6}>
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
        </Grid.Col>
        <Grid.Col span={6}>

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
      
          <Box>
            <Text style={{fontFamily: "Courier New"}}>
              Hey there! We&apos;re so excited to share this special journey
              with you. Right now, we&apos;ve got some high-level details up and
              running, but stay tuned—we&apos;ll be updating with more juicy
              info as the big day approaches.
            </Text>

            <Space h="md" />

            <Text style={{fontFamily: "Courier New"}}>
              In the meantime, feel free to explore the navbar to find all you
              need to know about the event, accommodation, and those burning
              questions you might have in the FAQs.
            </Text>

            <Space h="md" />

            <Text style={{fontFamily: "Courier New"}}>
              Thanks for stopping by, and we can&apos;t wait to celebrate with
              you!
            </Text>
          </Box>
        </Grid.Col>
      </Grid>

      <Space h="md" />

      <Grid>
        <Grid.Col span={4}>
          <PageCard
            imagePath="images/village.png"
            title="Accommodation"
            description="More detail for what is on this page"
            link="/accommodation"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <PageCard
            imagePath="images/breakfast-tables.png"
            title="Timeline"
            description="More detail for what is on this page"
            link="/timeline"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <PageCard
            imagePath="images/faq.png"
            title="FAQs"
            description="More detail for what is on this page"
            link="/faqs"
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
