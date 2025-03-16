"use client";

import {
  Title,
  Text,
  Timeline,
  Space,
  List,
  Grid,
  Image,
  Card,
  Overlay,
  Box,
} from "@mantine/core";
import {
  IconHeart,
  IconPencilQuestion,
  IconHomeMove,
  IconBalloon,
  IconCoffee,
  IconTent,
  IconGlassChampagne,
  IconMoonStars,
  IconClockHeart,
} from "@tabler/icons-react";
import OverlayCard from "@/components/overlaycard";

export default function TimelineContent() {
  return (
    <>
      <Text>
        Our wedding celebration will be over three days. We&apos;d love for you
        to join us the night before and stay until the morning after if
        you&apos;re able. If that&apos;s not possible, no worries, just come for
        the wedding day.
      </Text>

      <Text>
        We&apos;re so excited to share what we have planned with you, and to see
        you there!
      </Text>

      <Text>
        This is a high level outline, we don&apos;t want to give it all away and
        it&apos;s still ages away so we may add or change stuff as we go...
      </Text>

      <Space h="lg" />

      <Grid style={{ padding: "0 30px" }}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Title order={2} style={{ padding: "10px 0" }}>
            Day 1
          </Title>
          <Space h="md" />

          <Timeline bulletSize={30}>
            <Timeline.Item
              title="3pm - Ceremony rehearsal"
              bullet={<IconHeart />}
            >
              <Text c="dimmed" size="sm">
                Wedding party only, we&apos;ll do a quick run through and make
                sure everyone knows what they&apos;re doing
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="4pm - Onsite guest check in"
              bullet={<IconTent />}
            >
              <Text c="dimmed" size="sm">
                Anyone staying onsite for both nights can check in from 4pm
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="5pm - Pre-wedding festivities begin"
              bullet={<IconBalloon />}
            >
              <Text c="dimmed" size="sm">
                Pre-wedding festivities start at the village, including:
              </Text>
              <List c="dimmed" size="sm">
                <List.Item>Music and games</List.Item>
                <List.Item>Food: homemade pizzas and other snacks</List.Item>
                <List.Item>Plenty of drinks to keep us going</List.Item>
              </List>
              <Text c="dimmed" size="sm">
                Those not staying at the village are still welcome to join in,
                you&apos;ll just need to leave by 10pm.
              </Text>
            </Timeline.Item>

            <Timeline.Item title="8pm - Quiz" bullet={<IconPencilQuestion />}>
              <Text c="dimmed" size="sm">
                Who doesn&apos;t love a quiz?
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Title order={2} style={{ padding: "10px 0" }}>
            Day 2
          </Title>
          <Space h="md" />

          <Timeline bulletSize={30}>
            <Timeline.Item
              title="Morning - Village breakfast"
              bullet={<IconCoffee />}
            >
              <Text c="dimmed" size="sm">
                Self-serve breakfast will be available for guests staying at the
                wedding village
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="10am - Onsite guest check in"
              bullet={<IconTent />}
            >
              <Text c="dimmed" size="sm">
                Anyone staying onsite for just the one night can check in from
                10am
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="11:45am - Village mimosas"
              bullet={<IconGlassChampagne />}
            >
              <Text c="dimmed" size="sm">
                Celebrate with other guests, help yourself to a mimosa
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="12:45pm - Guests seated ahead of ceremony"
              bullet={<IconClockHeart />}
            >
              <Text c="dimmed" size="sm">
                Whether already onsite or travelling from further afield, get
                yourself seated ahead of our ceremony starting at 1pm!
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="1pm - It's our wedding!"
              bullet={<IconHeart />}
            >
              <Text c="dimmed" size="sm">
                We don&apos;t want to give away all the surprises... Though you
                can expect the usual things, we&apos;ll feed you, there&apos;ll
                be drinks, partying.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="12am - Hometime / retire to village"
              bullet={<IconMoonStars />}
            >
              <Text c="dimmed" size="sm">
                Our wedding day is over, but for anyone staying in the village
                (who isn&apos;t heading straight to bed) the afterparty starts
                now!
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Title order={2} style={{ padding: "10px 0" }}>
            Day 3
          </Title>
          <Space h="md" />

          <Timeline bulletSize={30}>
            <Timeline.Item
              title="Morning - Village breakfast"
              bullet={<IconCoffee />}
            >
              <Text c="dimmed" size="sm">
                Self-serve breakfast will be available for guests staying at the
                wedding village
              </Text>
            </Timeline.Item>

            <Timeline.Item title="11am - Check out" bullet={<IconHomeMove />}>
              <Text c="dimmed" size="sm">
                For anyone staying onsite check out is at 11am
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={4}>
          <OverlayCard
            cardKey="pizzaOven"
            imagePath="images/pizza-oven.png"
            overlay="At the pre-wedding village party we'll be serving
                    freshly made pizzas from our oven, hot and delicious!"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <OverlayCard
            cardKey="breakfastShack"
            imagePath="images/breakfast-shack.png"
            overlay="The pods all have plenty of space but for something more
                    sociable you can get ready together in the makeup hut!"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <OverlayCard
            cardKey="breakfastShack"
            imagePath="images/get-ready-hut.png"
            overlay="Self-serve breakfast will be available for everyone staying
                    at the wedding village."
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
