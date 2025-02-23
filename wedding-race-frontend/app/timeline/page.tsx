'use client';

import { Title, Text, Timeline, Space, List, Grid, Image, Card, Overlay, Box } from "@mantine/core";
import { IconSun } from '@tabler/icons-react';
import { useState } from 'react'

export default function TimelinePage() {

  type OverlayKey = 'pizzaOven' | 'breakfastShack' | 'getReadyHut';

  const [overlayVisible, setOverlayVisible] = useState<{ [key in OverlayKey]: boolean }>({ 
    pizzaOven: false, 
    breakfastShack: false, 
    getReadyHut: false 
  });

  const handleOverlayToggle = (key: OverlayKey) => {
    setOverlayVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Title order={1}>Timeline</Title>

      <Text>
        Our wedding celebration will be over three days. We&apos;d love for you to join us the night before and stay
        until the morning after if you&apos;re able. If that&apos;s not possible, no worries, just come for the wedding day.
      </Text>

      <Text>
        We&apos;re so excited to share what we have planned with you, and to see you there!
      </Text>

      <Text>
        This is a high level outline, we don&apos;t want to give it all away and it&apos;s still ages away so we may add or change stuff as we go...
      </Text>

      <Space h="lg" />

      <Grid>
        <Grid.Col span={4}>

          <Title order={2}>Day 1</Title>
          <Space h="md" />

          <Timeline bulletSize={25}>

            <Timeline.Item title="3pm - Ceremony rehearsal" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Wedding party only, we&apos;ll do a quick run through and make sure everyone knows what they&apos;re doing
              </Text>
            </Timeline.Item>

            <Timeline.Item title="4pm - Onsite guest check in" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Anyone staying onsite for both nights can check in from 4pm
              </Text>
            </Timeline.Item>

            <Timeline.Item title="5pm - Pre-wedding festivities begin" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Pre-wedding festivities start at the village, including:
              </Text>
              <List c="dimmed" size="sm">
                <List.Item>Music and games</List.Item>
                <List.Item>Food: homemade pizzas and other snacks</List.Item>
                <List.Item>Pleny of drinks to keep us going</List.Item>
              </List>
              <Text c="dimmed" size="sm">
                Those not staying at the village are still welcome to join in, you&apos;ll just need to leave by 10pm.
              </Text>

            </Timeline.Item>

            <Timeline.Item title="8pm - Quiz" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Who doesn&apos;t love a quiz?
              </Text>
            </Timeline.Item>

          </Timeline>

        </Grid.Col>

        <Grid.Col span={4}>

          <Title order={2}>Day 2</Title>
          <Space h="md" />

          <Timeline bulletSize={25}>

            <Timeline.Item title="Morning - Village breakfast" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Self-serve breakfast will be available for guests staying at the wedding village
              </Text>
            </Timeline.Item>

            <Timeline.Item title="10am - Onsite guest check in" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Anyone staying onsite for just the one night can check in from 10am
              </Text>
            </Timeline.Item>

            <Timeline.Item title="11:45am - Village mimosas" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Celebrate with other guests, help yourself to a mimosa
              </Text>
            </Timeline.Item>

            <Timeline.Item title="12:45pm - Guests seated ahead of ceremony" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Whether already onsite or travelling from further afield, get yourself seated ahead of our ceremony starting at 1pm!
              </Text>
            </Timeline.Item>

            <Timeline.Item title="1pm - It&apos;s our wedding!" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                We don&apos;t want to give away all the surprises... Though you can expect the usual things, we&apos;ll feed you, there&apos;ll be drinks, partying.
              </Text>
            </Timeline.Item>

            <Timeline.Item title="12am - Hometime / retire to village" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Our wedding day is over, but for anyone staying in the village (who isn&apos;t heading straight to bed) the afterparty starts now!
              </Text>
            </Timeline.Item>

          </Timeline>

        </Grid.Col>

        <Grid.Col span={4}>

          <Title order={2}>Day 3</Title>
          <Space h="md" />

          <Timeline>
            <Timeline.Item title="Morning - Village breakfast" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                Self-serve breakfast will be available for guests staying at the wedding village
              </Text>
            </Timeline.Item>

            <Timeline.Item title="11am - Check out" bullet={<IconSun />}>
              <Text c="dimmed" size="sm">
                For anyone staying onsite check out is at 11am
              </Text>
            </Timeline.Item>
          </Timeline>

        </Grid.Col>
      </Grid>

      <Grid>
      <Grid.Col span={4}>
        <Card onClick={() => handleOverlayToggle('pizzaOven')} shadow="sm" p="lg" style={{ position: 'relative' }}>
          <Image
            radius="sm"
            src="images/pizza-oven.png"
            height="auto"
            width="100%"
            fit="contain"
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {overlayVisible.pizzaOven && (
            <Overlay color="rgba(0, 0, 0, 0.6)" opacity={1} zIndex={5}>
              <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                <Text>At the pre-wedding village party we&apos;ll be serving freshly made pizzas from our oven, hot and delicious!</Text>
              </Box>
            </Overlay>
          )}
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card onClick={() => handleOverlayToggle('breakfastShack')} shadow="sm" p="lg" style={{ position: 'relative' }}>
          <Image
            radius="sm"
            src="images/breakfast-shack.png"
            height="auto"
            width="100%"
            fit="contain"
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {overlayVisible.breakfastShack && (
            <Overlay color="rgba(0, 0, 0, 0.6)" opacity={1} zIndex={5}>
              <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                <Text>Self-serve breakfast will be available for everyone staying at the wedding village.</Text>
              </Box>
            </Overlay>
          )}
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card onClick={() => handleOverlayToggle('getReadyHut')} shadow="sm" p="lg" style={{ position: 'relative' }}>
          <Image
            radius="sm"
            src="images/get-ready-hut.png"
            height="auto"
            width="100%"
            fit="contain"
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {overlayVisible.getReadyHut && (
            <Overlay color="rgba(0, 0, 0, 0.6)" opacity={1} zIndex={5}>
              <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                <Text>The pods all have plenty of get ready space but for something more sociable guest can get ready together in the makeup hut, there&apos;ll be a bottle of fizz ready for you!</Text>
              </Box>
            </Overlay>
          )}
        </Card>
      </Grid.Col>
    </Grid>

    </>

  );
}
