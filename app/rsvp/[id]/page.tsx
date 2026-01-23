import sql from "@/db/neon";
import { notFound } from "next/navigation";
import {
  Title,
  Text,
  Divider,
  Space,
  Center,
  Button,
  Anchor,
} from "@mantine/core";
import WeddingTimeline from "@/components/weddingTimeline";
import RsvpFormClient from "@/components/rsvpFormClient";
import playConfetti from "@/components/playconfetti";
import { IconConfetti } from "@tabler/icons-react";

export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

export default async function InvitePage(props: {
  params: Promise<{ id: string }>;
}) {
  // Check For valid ID =======================================================
  const params = await props.params;
  const id = typeof params?.id === "string" ? params.id : "";

  const possible_ids_result = await sql`SELECT id FROM Invites`;
  const possible_ids = possible_ids_result.map((row: Record<string, any>) =>
    String(row.id),
  );

  if (!possible_ids.includes(id)) {
    return notFound();
  }

  // Check if already submitted ===============================================
  const invite_result =
    await sql`SELECT partyname, maxguests, submitted, prewedding, children FROM Invites WHERE id = ${id}`;

  const submitted = invite_result[0].submitted;
  const preWedding = invite_result[0].prewedding;

  const guests =
    await sql`SELECT id, firstname, surname, rsvp, dietary, child, prewedding FROM Guests WHERE inviteid = ${id}`;

  if (submitted) {
    return (
      <>
        <Title px={0} order={1}>
          RSVP to our wedding
        </Title>
        <Text px={0}>Thank you for your RSVP!</Text>
        <Text px={0}>
          On this page you'll find a copy of your response, information on
          booking accommodation, plus a copy of your wedding timeline.
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

        <Divider my="sm" />

        <Title px={0} order={2}>
          Your RSVP details
        </Title>
        <Text px={0} mb="md">
          We have received your response for the following guests:
        </Text>
        {[...guests]
          .sort((a, b) => a.id - b.id)
          .map((guest: Record<string, any>) => (
            <div
              key={guest.id}
              style={{
                marginBottom: 16,
                outline: "1px solid #c9c9c9",
                borderRadius: 4,
                padding: 0,
              }}
            >
              <Text px={15} pb={0} key={guest.id + "name"}>
                {guest.firstname} {guest.surname}:{" "}
                {guest.rsvp
                  ? guest.prewedding
                    ? "Attending pre-wedding and wedding day"
                    : "Attending wedding day"
                  : "Not attending"}
              </Text>
              <Text px={15} pt={5} key={guest.id + "dietary"}>
                Dietary Requirements: {guest.dietary || "None"}
              </Text>
            </div>
          ))}

        <Text px={0}>
          If this looks wrong, or you want to make any changes, please let us
          know ASAP so we can update our details.
        </Text>

        <Divider my="sm" />

        <Title px={0} order={2}>
          Booking accommodation
        </Title>
        <Text px={0}>
          To book on-site accomodation please use the Venue's{" "}
          <Anchor
            href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbook.bedful.com%2Fglamping%2Fuk%2Fengland%2Fnorth-east-england%2Fnorth-yorkshire%2Fnorthallerton%2F11850-lake-henry-ltd%3Fparent_id%3D11273264&data=05%7C02%7C%7C27ea965b2dd649e9000d08de121ef0d3%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638968121370698456%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=DE1tjtoXStposChaEIVVijLEmdw0EATwlGFIizKvO7g%3D&reserved=0"
            target="_blank"
            px={0}
            style={{ textDecoration: "underline" }}
          >
            booking portal
          </Anchor>
          . There are a range of different pod styles available, all of which
          feature full sized beds with plenty of space to get ready and it
          includes breakfast!
        </Text>

        <Text px={0}>
          The portal defaults to booking for a two-night stay (8th & 9th),
          {preWedding && (
            <>
              &nbsp;though we understand not everyone can get time away for the
              whole three days so if you can only join us for the one night
              please remember to check and change this to just the 9th if
              necessary!
            </>
          )}
          {!preWedding && (
            <>
              &nbsp;please remember to change this to just the 9th before
              booking. If you are travelling far and would like to stay the
              night of the 8th as well, please feel free to do so, just let us
              know so we know to expect you the night before!
            </>
          )}
        </Text>

        <Text px={0}>
          On site accomodation will be finalised ahead of the wedding date, so,
          if you want to stay with us, please make sure you've booked your pods
          by 30th April 2026. We don't expect to run out of village space, but
          it will fill up on a first come, first served basis, so get in quick
          to secure your space!
        </Text>

        <Text px={0} style={{ fontStyle: "italic" }}>
          Note: If you'd prefer to stay off site, please be aware that venue
          restrictions mean only guests staying in the village are able to
          remain there after {preWedding && <>10pm the night before and </>}{" "}
          midnight on the night of the wedding. There are local airbnbs, and
          there is one cottage on site (though limited to six guests / three
          rooms). Let us know ASAP if you'd want to make use of the cottage.
        </Text>

        {preWedding && (
          <>
            <Divider my="sm" />

            <Title px={0} order={2}>
              Pre-wedding information
            </Title>
            <Text px={0} mb="md">
              For the night before the wedding, we'll provide some drinks, but
              feel free to bring your own if you want anything specific. There
              are bottle fridges available at the village to store drinks and
              we'll have pizza ovens running for the evening's food, so feel
              free to get creative if you do bring anything along!
            </Text>

            <Text px={0} mb="md">
              The pods are all yours from the moment you check in so feel free
              to relax and join in with the rest of the village for as much or
              as little as you like. You'll be free to come and go as you please
              and we'll provide maps of the local area so if you want to, you
              can explore the surrounding area too.
            </Text>

            <Text px={0} mb="md">
              Note that any food and alcohol can only be consumed within the
              village, the venue does not allow guests to bring their own
              alcohol up the the venue on the day itself. We'll have a bar in
              the venue itself, along with plenty of food to keep you satisfied!
            </Text>

            <Title px={0} order={3}>
              Quiz round suggestions
            </Title>
            <Text px={0} mb="md">
              You'll be able to make suggestions for the pre-wedding quiz here
              in a few weeks time.
            </Text>
          </>
        )}

        <Divider my="sm" />

        <Title px={0} order={2}>
          Gifts
        </Title>
        <Text px={0} mb="md">
          Your presence at our wedding is a gift enough!
        </Text>

        <Text px={0} mb="md">
          However, if you do wish to contribute a gift, we have set up a PayPal
          me where you can{" "}
          <Anchor
            href="https://www.paypal.com/paypalme/laurarace"
            target="_blank"
            px={0}
            style={{ textDecoration: "underline" }}
          >
            contribute to our first family holiday
          </Anchor>
          .
        </Text>

        <Divider my="sm" />

        <Title px={0} order={2}>
          Music requests
        </Title>
        <Text px={0} mb="md">
          An option to add music requests to our guest playlist on Spotify will
          magically appear here in a few weeks.
        </Text>

        <Divider my="sm" />

        <Title px={0} order={2}>
          Your wedding timeline
        </Title>
        <WeddingTimeline preWedding={preWedding} />

        {/* Extra space at bottom to prevent overlap with Back to Top button */}

        <Space h="xl" />
        <Space h="xl" />
      </>
    );
  }

  // Main RSVP form ===========================================================
  const partyName = invite_result[0].partyname;
  const maxGuests = invite_result[0].maxguests;
  const children = invite_result[0].children;

  const initialGuests = guests.map((guest: Record<string, any>) => ({
    id: guest.id,
    firstname: guest.firstname,
    surname: guest.surname,
    child: guest.child,
  }));

  const maxAdditionalGuests = Math.max(0, maxGuests - guests.length);

  return (
    <>
      <Title px={0} order={1}>
        RSVP to our wedding
      </Title>
      <RsvpFormClient
        partyID={id}
        partyName={partyName}
        preWedding={preWedding}
        guestInformation={initialGuests}
        maxAdditionalGuests={maxAdditionalGuests}
        children={children}
      />
      {/* Extra space at bottom to prevent overlap with Back to Top button */}
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}
