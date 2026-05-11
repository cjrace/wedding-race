"use client";

import {
  Title,
  Text,
  Divider,
  Center,
  Button,
  Anchor,
  Grid,
} from "@mantine/core";
import { IconConfetti } from "@tabler/icons-react";
import playConfetti from "./playconfetti";
import WeddingTimeline from "./weddingTimeline";
import SongRequests from "./songrequests";

export default function GuestInformation({
  preWedding,
  partyName,
  inviteId,
}: {
  preWedding: boolean;
  partyName: string;
  inviteId: string;
}) {
  return (
    <>
      <section id="guest-information">
        <Title px={0} order={2}>
          Hey {partyName}, the wedding is fast approaching!
        </Title>
        <Text px={0}>
          We can't wait to see you. It's nearly time! Here's everything you need
          to know to help you plan, pack, and get properly excited, including
          key information on the venue, the village, your itinerary, the chance
          to request songs and more!
        </Text>
        <Text px={0} mb="md">
          While you're here, it's worth taking a moment to double-check your
          RSVP details, especially any dietary requirements. If anything needs
          updating, please let us know as soon as possible so we can get it to
          the catering team in time. See you very soon! ❤️
        </Text>

        <Divider my="sm" />
        <Title px={0} order={3}>
          Your itinerary
        </Title>

        <WeddingTimeline preWedding={preWedding} />

        <Divider my="sm" />
        <Title px={0} order={3}>
          Preparing for the celebrations
        </Title>
        <Title px={0} order={4}>
          Gifts
        </Title>
        <Text px={0} mb="md">
          A few of you have been asking, so thank you! Your presence really is
          enough, but if you'd like to give something, you can{" "}
          <Anchor
            href="https://www.paypal.com/paypalme/laurarace"
            target="_blank"
            px={0}
            style={{ textDecoration: "underline" }}
          >
            contribute to our PayPal pot
          </Anchor>{" "}
          towards our first family holiday. Any amount is gratefully received
          and hugely appreciated.
        </Text>
        <Title px={0} order={4}>
          What to wear
        </Title>
        <Text px={0}>
          The bridal party will be wearing rust colours, and the grooms party
          will be in dark green and rust. There is no pressure to avoid these,
          though we&apos;re sharing as a few people have been asking already to
          help plan outfits!
        </Text>
        <Text px={0} mb="md">
          For the wedding day, dress to impress. Most guests will be in suits
          and dresses. It'll be summer, so make sure you're comfortable too.
          Although the aim is to be outside, you shouldn't need any special
          footwear. The village does have gravel paths between the pods, so if
          rain is forecast you might want to pack a second pair of shoes for
          comfort, though it's not essential.
        </Text>
        <Title px={0} order={4}>
          Photos
        </Title>
        <Text px={0}>
          We'd love for everyone to be fully present during the ceremony, so
          please hold off on photos while we're saying our vows. Our
          photographer has it covered. Anywhere else throughout the day and
          night, snap away!
        </Text>
        <Text px={0} mb="md">
          We have set up a shared{" "}
          <Anchor
            href="https://photos.app.goo.gl/GvyQND53UQbxKsAA6"
            target="_blank"
            px={0}
          >
            Google Photos album
          </Anchor>{" "}
          where we are excited to pool together any pictures you take throughout
          the celebrations.
        </Text>

        <Title px={0} order={4}>
          Children
        </Title>
        <Text px={0} mb="md">
          We will have Lola, and are expecting a handful of other 1-2 year olds
          at the celebrations. For the little ones, we will have dedicated
          children&apos;s food at the wedding breakfast, high chairs and a soft
          play area in the tipi, plus a quiet retreat space in one of the
          cottages.
        </Text>

        <Title px={0} order={4}>
          What not to bring
        </Title>
        <Text px={0}>
          Sadly, you are not allowed to bring fireworks (the venue is close to
          local farms and wildlife), and no dogs are allowed in the wedding
          village either.
        </Text>

        <Title px={0} order={4}>
          Pre-book any taxis
        </Title>
        <Text px={0} mb="md">
          If you need a taxi at any point, we strongly recommend pre-booking in
          advance given the rural location. You should do this as soon as
          possible.
        </Text>

        <Divider my="sm" />
        <Title px={0} order={3}>
          Song requests
        </Title>
        <SongRequests inviteId={inviteId} />
      </section>

      <Divider my="sm" />
      <section id="venue">
        <Title px={0} order={3}>
          About the venue
        </Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Text px={0}>
              <Anchor
                style={{ padding: "0px", textDecoration: "underline" }}
                href="https://alexander-weddings.co.uk/"
              >
                Lake Henry
              </Anchor>{" "}
              is just 15 minutes off the A1 and the nearest train stations are
              Darlington or Northallerton.
            </Text>
            <Text px={0}>
              Full address: Cornhill Farm, East Cowton, Northallerton, DL7 0JW
            </Text>

            <Text px={0} mb="md">
              There is free parking available at the wedding village, at the
              bottom of the venue, for everyone, including those only attending
              on the wedding day. Overflow parking is also available if needed
              next to the tipi.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <iframe
              aria-label="Google Maps widget showing location of venue"
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

        <Title px={0} order={4}>
          On-site accommodation
        </Title>
        <Text px={0} mb="md">
          Pod and cottage rooms come with everything you need: a comfortable
          bed, bedding, towels, plugs for your gadgets, and heating if the
          evening calls for it. There's self-service tea and coffee available
          throughout your stay, plus a food prep area and fridges if you want to
          bring anything extra. We&apos;ll also provide maps of the local area
          if you fancy a walk or run during your stay. Checkout on Wednesday
          10th June is at 11am.
        </Text>

        <Title px={0} order={4}>
          Wedding village
        </Title>
        <Text px={0}>
          The wedding village will be the centre for most of the fun and comes
          with a laid back communal space where we can gather pre-ceremony as
          well as a place to start celebrations early, and then continue the
          party fireside at the end of the big day! There&apos;ll be music,
          games, tasty food and drinks for us all to enjoy.
        </Text>

        <Text px={0} mb="md" style={{ fontStyle: "italic" }}>
          Note: If you&apos;re staying off site, please be aware that venue
          restrictions mean only guests staying in the village are able to
          remain there after {preWedding && <>10pm the night before and </>}
          midnight on the night of the wedding.
        </Text>
      </section>
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
      <Text px={0} mb="md">
        If you have any questions not covered here, just drop us a message. We
        can't wait to celebrate with you!
      </Text>
    </>
  );
}
