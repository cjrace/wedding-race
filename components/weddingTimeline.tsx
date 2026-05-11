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
                  Pre-wedding festivities kick off at the village with pizza
                  ovens going all evening, drinks fridges stocked with beer and
                  wine, and maybe a cocktail or two. We'll have lawn games,
                  music and food. Don&apos;t worry if you can't make it that
                  early, just join whenever you're able. Your pod is yours from
                  check-in, so relax and dip in and out of the village as much
                  or as little as you like. Feel free to bring your own drinks
                  or anything extra you'd like; there are bottle fridges in the
                  village to store whatever you bring.
                </Text>
                <Text c="gray.5" size="sm">
                  Not staying on site? You're still very welcome and we'd love
                  for you to join us! Just note that venue rules mean off-site
                  guests will need to head off by 10pm.
                </Text>
              </Timeline.Item>

              <Timeline.Item title="8pm - Quiz" bullet={<IconPencilQuestion />}>
                <Text c="gray.5" size="sm">
                  Who doesn&apos;t love a quiz that brings the chance to win
                  drinks tokens that can be redeemed at the bar the next day?
                </Text>
              </Timeline.Item>
              <Timeline.Item
                title="9pm - Whisky and hot chocolates"
                bullet={<IconPencilQuestion />}
              >
                <Text c="gray.5" size="sm">
                  What better way to end the night? Naturally, hot chocolates
                  come with an optional splash of Baileys.
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
                  There will be a self-serve breakfast available for village
                  guests in the morning (7am-10am) where you can fill yourself
                  up with lots of fuel for the big day ahead. After that, the
                  rest of the guests will start gathering in the village, the
                  games will still be out, music will be on, and there's a
                  dedicated makeup hut if you'd like to get ready somewhere
                  sociable.
                </Text>
              </Timeline.Item>
            )}

            {!preWedding && (
              <Timeline.Item
                title="10am - Day guest check in"
                bullet={<IconTent />}
              >
                <Text c="gray.5" size="sm">
                  You can arrive whenever you like from 10am, head straight to
                  the wedding village and join the party! There'll be plenty of
                  guests around to celebrate with ahead of the ceremony. Anyone
                  staying on site will be able to check in to their pods from
                  10am too.
                </Text>
              </Timeline.Item>
            )}
            <Timeline.Item
              title="11am - Village mimosas"
              bullet={<IconGlassChampagne />}
            >
              <Text c="gray.5" size="sm">
                Celebrate with other guests, help yourself to a mimosa.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="12:30pm - Guests seated"
              bullet={<IconClockHeart />}
            >
              <Text c="gray.5" size="sm">
                Whether already on site or travelling from further afield, make
                sure you are all ready in the village by 12:30pm before being
                walked up to the ceremony area.
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
              <Text c="gray.5" size="sm">
                Seating is open after the front row (reserved for the wedding
                party), so sit wherever feels right. There's no Laura side or
                Cam side, many of our friends are shared between us!
              </Text>
              <Text c="gray.5" size="sm">
                We know that many guests share our love of food - please note
                that no outside food or drink is allowed at the main tipi. There
                will be canapes during the drinks reception immediately after
                the ceremony, the main wedding breakfast at 4:30pm and the
                evening food served around 8-9pm.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="12am - Retire to village"
              bullet={<IconMoonStars />}
            >
              <Text c="gray.5" size="sm">
                Guests staying on site can continue the celebrations by the fire
                pits in the village, or time for carriages for anyone staying
                off-site.
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
                Self-serve breakfast will be available for guests staying on
                site from 7am to 10am.
              </Text>
            </Timeline.Item>

            <Timeline.Item title="11am - Check out" bullet={<IconHomeMove />}>
              <Text c="gray.5" size="sm">
                Checkout for all staying on site is at 11am.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Grid.Col>
      </Grid>
    </>
  );
}
