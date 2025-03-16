"use client";

import {
  Text,
  Space,
  Divider,
  Grid,
  Box,
  Center,
  Image,
  Flex,
  Anchor,
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
      <Center>
        <Countdown date={weddingDateEnv ?? new Date("2095-08-08T19:17:08Z")} />
      </Center>

      <Divider my="md" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Center>
            <Image
              radius="sm"
              src="images/cam-and-laura.png"
              width="100%"
              style={{ width: "100%", height: "auto", margin: "20px 0" }}
              alt=""
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
              Hey there! We&apos;re so excited to share this special journey
              with you. Right now, we&apos;ve got some high-level details up and
              running, but stay tuned as we&apos;ll be updating with more juicy
              info as the big day approaches.
            </Text>

            <Text>
              In the meantime, feel free to explore the navbar to find all you
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
        </Grid.Col>
      </Grid>

      <Divider my="md" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <PageCard
            imagePath="images/village.png"
            title="Accommodation"
            description="More detail for what is on this page"
            link="/accommodation"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <PageCard
            imagePath="images/breakfast-tables.png"
            title="Timeline"
            description="More detail for what is on this page"
            link="/timeline"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
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
