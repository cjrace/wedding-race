"use client";

import { Title, Text } from "@mantine/core";

export default function PreWeddingSection() {
  return (
    <section id="pre-wedding">
      <Title px={0} order={2}>
        Pre-wedding information
      </Title>
      <Text px={0} mb="md">
        Pre-wedding festivities kick off at 4pm. If you can&apos;t make it that
        early, no problem at all — just join us whenever you&apos;re able to.
      </Text>

      <Text px={0} mb="md">
        Not staying on site? That&apos;s no problem either — you&apos;ll just
        need to head off by 10pm, as venue rules mean only guests staying in the
        village can stay later than that.
      </Text>

      <Text px={0} mb="md">
        For the night before the wedding, we&apos;ll provide some drinks, but
        feel free to bring your own if you want anything specific. There are
        bottle fridges available at the village to store drinks and we&apos;ll
        have pizza ovens running for the evening&apos;s food, so feel free to
        get creative if you do bring anything along!
      </Text>

      <Text px={0} mb="md">
        The pods are all yours from the moment you check in so feel free to
        relax and join in with the rest of the village for as much or as little
        as you like. You&apos;ll be free to come and go as you please and
        we&apos;ll provide maps of the local area so if you want to, you can
        explore the surrounding area too.
      </Text>

      <Text px={0} mb="md">
        Note that any food and alcohol can only be consumed within the village,
        the venue does not allow guests to bring their own alcohol up to the
        venue on the day itself. We&apos;ll have a bar in the venue itself,
        along with plenty of food to keep you satisfied!
      </Text>
    </section>
  );
}
