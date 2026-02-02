"use client";

import { Title, Text, Timeline, Space, Grid } from "@mantine/core";
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

export default function WeddingTimeline({
  preWedding,
}: {
  preWedding: boolean;
}) {
  const weddingDateEnv = process.env.NEXT_PUBLIC_WEDDING_DATETIME
    ? new Date(process.env.NEXT_PUBLIC_WEDDING_DATETIME)
    : undefined;

  const weddingDateBefore = weddingDateEnv
    ? new Date(weddingDateEnv.getTime() - 24 * 60 * 60 * 1000)
    : undefined;

  const weddingDateAfter = weddingDateEnv
    ? new Date(weddingDateEnv.getTime() + 24 * 60 * 60 * 1000)
    : undefined;

  return (
    <>
      <Grid style={{ padding: "0 30px" }}>
        {preWedding && (
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title order={2} style={{ padding: "10px 0" }}>
              Mon{" "}
              {weddingDateBefore
                ? weddingDateBefore.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                  })
                : "TBD"}
            </Title>
            <Space h="md" />

            <Timeline bulletSize={30}>
              <Timeline.Item
                title="4pm - Onsite guest check in"
                bullet={<IconTent />}
              >
                <Text c="gray.5" size="sm">
                  Anyone staying onsite the night before can check in from 4pm.
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="5pm - Festivities begin"
                bullet={<IconBalloon />}
              >
                <Text c="gray.5" size="sm">
                  Pre-wedding festivities start at the village, including music
                  and games, homemade pizzas and plenty of drinks.
                </Text>
                <Text c="gray.5" size="sm">
                  Those not staying at the village are still welcome to join in,
                  you&apos;ll just need to leave by 10pm.
                </Text>
              </Timeline.Item>

              <Timeline.Item title="8pm - Quiz" bullet={<IconPencilQuestion />}>
                <Text c="gray.5" size="sm">
                  Who doesn&apos;t love a quiz?
                </Text>
              </Timeline.Item>
            </Timeline>
          </Grid.Col>
        )}

        <Grid.Col span={{ base: 12, md: preWedding ? 4 : 6 }}>
          <Title order={2} style={{ padding: "10px 0" }}>
            Tue{" "}
            {weddingDateEnv
              ? weddingDateEnv.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                })
              : "TBD"}
          </Title>
          <Space h="md" />

          <Timeline bulletSize={30}>
            {preWedding && (
              <Timeline.Item
                title="Morning - Village breakfast"
                bullet={<IconCoffee />}
              >
                <Text c="gray.5" size="sm">
                  Self-serve breakfast will be available for guests staying at
                  the wedding village.
                </Text>
              </Timeline.Item>
            )}

            <Timeline.Item
              title="10am - Onsite guest check in"
              bullet={<IconTent />}
            >
              <Text c="gray.5" size="sm">
                Anyone staying onsite for just the one night can check in from
                10am.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="11:45am - Village mimosas"
              bullet={<IconGlassChampagne />}
            >
              <Text c="gray.5" size="sm">
                Celebrate with other guests, help yourself to a mimosa.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="12:45pm - Guests seated"
              bullet={<IconClockHeart />}
            >
              <Text c="gray.5" size="sm">
                Whether already on site or travelling from further afield, get
                yourself seated ahead of our ceremony starting at 1pm!
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="1pm - It's our wedding!"
              bullet={<IconHeart />}
            >
              <Text c="gray.5" size="sm">
                We don&apos;t want to give away all the surprises... Though you
                can expect the usual things, we&apos;ll feed you, there&apos;ll
                be drinks, partying.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="12am - Retire to village"
              bullet={<IconMoonStars />}
            >
              <Text c="gray.5" size="sm">
                Our wedding day is over, and it&apos;s time for carriages for
                anyone staying off-site, but for those staying in the village
                they can either head straight to bed or continue the
                celebrations by the firepits.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: preWedding ? 4 : 6 }}>
          <Title order={2} style={{ padding: "10px 0" }}>
            Wed{" "}
            {weddingDateAfter
              ? weddingDateAfter.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                })
              : "TBD"}
          </Title>
          <Space h="md" />

          <Timeline bulletSize={30}>
            <Timeline.Item
              title="Morning - Village breakfast"
              bullet={<IconCoffee />}
            >
              <Text c="gray.5" size="sm">
                Self-serve breakfast will be available for guests staying at the
                wedding village.
              </Text>
            </Timeline.Item>

            <Timeline.Item title="11am - Check out" bullet={<IconHomeMove />}>
              <Text c="gray.5" size="sm">
                Checkout for anyone staying on site is at 11am.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
      </Grid>
    </>
  );
}
