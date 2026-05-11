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

export default function GettingSoonLetter({
  preWedding,
  partyName,
  inviteId,
}: {
  preWedding: boolean;
  partyName: string;
  inviteId: string;
}) {
  return (
    <section id="getting-soon-letter">
      <Title px={0} order={2}>
        Hey {partyName}, the wedding is fast approaching!
      </Title>
      <Text px={0}>
        We can't wait to see you. It's nearly time! Here's everything you need
        to know to help you plan, pack, and get properly excited, including key
        information on the venue, the village, your itinerary, make song
        suggestions and more!
      </Text>
      <Text px={0} mb="md">
        While you're here, it's worth taking a moment to double-check your RSVP
        details, especially any dietary requirements. If anything needs
        updating, please let us know as soon as possible so we can get it to the
        catering team in time. See you very soon! ❤️
      </Text>

      <Divider my="sm" />
      <Title px={0} order={3} mt="xl" mb="sm">
        Your itinerary
      </Title>
      <WeddingTimeline preWedding={preWedding} />
      {preWedding && (
        <>
          <Title px={0} order={4}>
            The night before: join us at the village!
          </Title>
          <Text px={0}>
            On-site guests can check in from 4pm on Monday 8th June, with
            festivities kicking off from 5pm. Don't worry if you can't make it
            that early, just join whenever you're able! We'll have lawn games,
            music, and a pub quiz starting at 8pm. The pods are all yours from
            the moment you check in so feel free to relax and join in with the
            rest of the village for as much or as little as you like.
          </Text>

          <Text px={0} mb="md">
            Not staying on site? You're still very welcome and we'd love for you
            to join us, just note that venue rules mean non-staying guests will
            need to head off by 10pm.
          </Text>

          <Title px={0} order={4}>
            Food & drink the night before
          </Title>
          <Text px={0} mb="md">
            We'll have pizza ovens going all evening, drinks fridges stocked
            with beer and wine, and maybe a cocktail or two. Feel free to bring
            your own drinks or anything extra if you'd like something specific;
            there are bottle fridges in the village to store whatever you bring.
            Just a heads up: no outside food or drink at the tipi on the wedding
            day itself, we've got the caterers and bar fully covered for that!
          </Text>
        </>
      )}
      {!preWedding && (
        <>
          <Title px={0} order={4}>
            Wedding morning
          </Title>
          <Text px={0}>
            You can arrive whenever you like from 10am, head straight to the
            wedding village and join the party! We'll be serving mimosas from
            11am, and there'll be plenty of guests around to celebrate with
            ahead of the ceremony.
          </Text>
          <Text px={0} mb="md">
            Guests will be seated at 12:30pm, so make sure you are ready in the
            village before then. You'll then be walked up to the ceremony area
            and seated.
          </Text>
        </>
      )}
      {preWedding && (
        <>
          <Title px={0} order={4}>
            Wedding morning
          </Title>
          <Text px={0} mb="md">
            Self-serve breakfast will be available for village guests in the
            morning (7am-10am). After that, the games will still be out, music
            will be on, and there's a dedicated makeup hut if you'd like to get
            ready somewhere sociable. We'll be serving mimosas from 11am, so you
            can celebrate with other guests and toast to the day ahead.
          </Text>
        </>
      )}
      <Title px={0} order={4}>
        The ceremony
      </Title>
      <Text px={0} mb="md">
        Guests will be seated at 12:45pm, so please make sure you're at the
        venue and ready by then. Seating is open after the front row (reserved
        for the wedding party), so sit wherever feels right. There's no Laura
        side or Cam side, many of our friends are shared between us! The
        ceremony starts at 1pm, and from there we'll be celebrating together
        until midnight. For those staying in the village, the party continues by
        the firepits after that!
      </Text>

      <Divider my="sm" />
      <Title px={0} order={3} mt="xl" mb="sm">
        Preparing for the celebrations
      </Title>
      <Title px={0} order={4}>
        Gifts
      </Title>
      <Text px={0} mb="md">
        A few of you have been asking, so thank you! Your presence really is
        enough, but if you'd like to give something, we've set up a where you
        can{" "}
        <Anchor
          href="https://www.paypal.com/paypalme/laurarace"
          target="_blank"
          px={0}
          style={{ textDecoration: "underline" }}
        >
          PayPal pot
        </Anchor>{" "}
        where you can contribute to our first family holiday. Any amount is
        gratefully received and hugely appreciated.
      </Text>
      <Title px={0} order={4}>
        What to wear
      </Title>
      <Text px={0} mb="md">
        For the wedding day, dress to impress. Most guests will be in suits and
        dresses. It'll be summer, so make sure you're comfortable too. Although
        the aim is to be outside, you shouldn't need any special footwear. The
        village does have gravel paths between the pods, so if rain is forecast
        you might want to pack a second pair of shoes for comfort, though it's
        not essential.
      </Text>
      <Title px={0} order={4}>
        Photos
      </Title>
      <Text px={0}>
        We'd love for everyone to be fully present during the ceremony, so
        please hold off on photos while we're saying our vows. Our photographer
        has it covered. Anywhere else throughout the day and night, snap away!
      </Text>
      <Text px={0} mb="md">
        Add any photos you take to our shared{" "}
        <Anchor
          href="https://photos.app.goo.gl/GvyQND53UQbxKsAA6"
          target="_blank"
          px={0}
        >
          Google Photos album
        </Anchor>
        .
      </Text>

      <Title px={0} order={4}>
        Children
      </Title>
      <Text px={0} mb="md">
        For your little ones we'll have dedicated children's food at the wedding
        breakfast, high chairs for under-5s, a soft play area in the tipi, and a
        quiet retreat space in one of the cottages.
      </Text>

      <Title px={0} order={4}>
        What not to bring
      </Title>
      <Text px={0} mb="md">
        A couple of venue restrictions to be aware of: no fireworks (the venue
        is close to local farms and wildlife), and no dogs in the wedding
        village. Thanks for helping us keep the venue happy!
      </Text>

      <SongRequests inviteId={inviteId} />

      <Divider my="sm" />
      <Title px={0} order={3} mt="xl" mb="sm">
        About the venue
      </Title>
      <Title px={0} order={4}>
        Getting there & getting around
      </Title>
      <Text px={0} mb="md">
        Lake Henry is just 15 minutes off the A1, and reachable by train via
        Darlington or Northallerton. Main parking is by the wedding village,
        with overflow parking near the tipi. If you need a taxi at any point,
        the venue recommends pre-booking in advance. The following firms are
        suggested by the venue, but you can use any company: - Firm A - Firm B
      </Text>
      {preWedding && (
        <>
          <Title px={0} order={4}>
            Staying on site: what's included
          </Title>
          <Text px={0} mb="md">
            Your pod comes with everything you need: a comfortable bed, bedding,
            towels, plugs for your gadgets, and heating if the evening calls for
            it. There's self-service tea and coffee available throughout your
            stay, plus a food prep area and fridges if you want to bring
            anything extra. We'll also provide maps of the local area if you
            fancy a walk or run during your stay. Checkout on Wednesday 10th
            June is at 11am.
          </Text>
        </>
      )}

      <section id="venue">
        <Title px={0} order={3}>
          Getting to the venue
        </Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Text px={0} mb="md">
              <Anchor
                style={{ padding: "0px", textDecoration: "underline" }}
                href="https://alexander-weddings.co.uk/"
              >
                Lake Henry
              </Anchor>{" "}
              is just 15 minutes off the A1 and the nearest train stations are
              Darlington or Northallerton.
            </Text>

            <Text px={0} mb="md">
              There is free parking available at the wedding village, at the
              bottom of the venue, for everyone, including those only attending
              on the wedding day.
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

        <Divider my="sm" />

        <Title px={0} order={3}>
          Wedding village
        </Title>
        <Text px={0} mb="md">
          The wedding village will be the centre for most of the fun!
        </Text>

        <Text px={0} mb="md">
          The village comes with a laid back communal space where we can gather
          pre-ceremony as well as a place to start celebrations early, and then
          continue the party fireside at the end of the big day! There&apos;ll
          be music, games, tasty food and drinks for us all to enjoy.
        </Text>

        <Text px={0} mb="md">
          We&apos;ll be providing food and drink for guests invited to the night
          before, and self-service breakfast for both mornings. There&apos;ll
          also be tea and coffee available throughout your stay, and
          there&apos;s fridges plus a food prep area if you want to bring
          anything yourself too.
        </Text>

        <Text px={0} mb="md">
          If you are staying in the village (or the cottage), the pods come with
          everything you need for a good nights sleep; a comfortable bed,
          bedding, towels, plugs for your gadgets and heating if you need it!
        </Text>

        <Text px={0} mb="md" style={{ fontStyle: "italic" }}>
          Note: If you&apos;re staying off site, please be aware that venue
          restrictions mean only guests staying in the village are able to
          remain there after {preWedding && <>10pm the night before and </>}
          midnight on the night of the wedding.
        </Text>
      </section>
      <Text px={0} mb="md">
        If you have any questions not covered here, just drop us a message. We
        can't wait to celebrate with you!
      </Text>
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
    </section>
  );
}
