"use client";

import { Title, Text, Space, Grid, Image } from "@mantine/core";

export default function AccommodationContent() {
  return (
    <>
      <Text>
        Our wedding celebration will be over three days. We&apos;d love for you
        to join us the night before and stay until the morning after if
        you&apos;re able. If that&apos;s not possible, no worries, just come for
        the wedding day.
      </Text>

      <Space h="sm" />

      <Text>
        Check out our timeline page for more details on the plans for each day.
      </Text>

      <Space h="xl" />

      <Title order={2}>Venue</Title>
      <Space h="md" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            Lake Henry is just 15 minutes off the A1 and is reachable by train
            links to Darlington or Northallerton.
          </Text>

          <Space h="sm" />

          <Text>
            There&apos;s on-site accommodation for up to 79 of our guests, with
            the wedding village hosting our before and after party!
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.389598430681!2d-1.5355666!3d54.4384095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e9965dd84ecd7%3A0xa447869f2ba26fb7!2sAlexander%20Weddings%20%26%20Events!5e0!3m2!1sen!2suk!4v1740190936834!5m2!1sen!2suk"
            height="auto"
            width="100%"
            style={{
              border: 0,
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid.Col>
      </Grid>

      <Space h="xl" />

      <Title order={2}>Wedding village</Title>
      <Space h="md" />

      <Grid align="center">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            Stay in our 31 pod wedding village to be closest to the fun!
          </Text>

          <Space h="sm" />

          <Text>
            The village comes with a laid back communal space where we can start
            celebrations early (and continue the party after our big day!).
            There&apos;ll be music, games, tasty food and drinks for us all to
            enjoy.
          </Text>
          <Space h="sm" />

          <Text>
            Pod options include twin, double, family and en-suite pods, some
            family pods can sleep 3 adults if needed.
          </Text>
          <Space h="sm" />

          <Text>
            Guests can book to stay for the full two nights (Monday to
            Wednesday) or for just the night of the wedding.
          </Text>

          <Space h="sm" />

          <Text>
            Pod prices start from £150 for one night and £260 for two nights, if
            this is prohibitive for you then let us know.
          </Text>

          <Space h="sm" />

          <Text>
            There is free parking available for those staying in pods (let us
            know in advance if you have multiple cars) and there&apos;ll be
            plenty of food (breakfast included!) and drinks provided during your
            stay.
          </Text>

          <Space h="sm" />

          <Text>
            Booking for the pods will open late 2025, we&apos;ll reach out again
            to let you know when the link is open.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            radius="sm"
            src="images/full-village.png"
            height="auto"
            width="100%"
            fit="contain"
            alt="Cottages"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid.Col>
      </Grid>

      <Space h="xl" />

      <Title order={2}>On site cottages</Title>
      <Space h="md" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            For those that want to stay on site but don&apos;t fancy the pod
            life, we also have two cottages with three double bedrooms in each.
          </Text>

          <Space h="sm" />

          <Text>
            For the night before the wedding one of the cottages will be
            reserved for the bride and bridesmaids, but otherwise (whilst very
            limited) these rooms will be free for you to use too.
          </Text>

          <Space h="sm" />

          <Text>
            If you&apos;d prefer one of the cottage rooms, let us know.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            radius="sm"
            src="images/cottages.png"
            height="auto"
            width="100%"
            fit="contain"
            alt="Cottages"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid.Col>
      </Grid>

      <Space h="xl" />

      <Title order={2}>Local hotels</Title>

      <Space h="md" />

      <Text>
        If you&apos;d prefer a local hotel, we&apos;d recommend looking in
        Darlington or Northallerton, which are 15 and 20 minutes away by car
        respectively.
      </Text>

      <Space h="sm" />

      <Text>
        Any taxis will need to be pre-booked, we&apos;ll share recommended
        companies nearer the time.
      </Text>

      <Space h="xl" />
    </>
  );
}
