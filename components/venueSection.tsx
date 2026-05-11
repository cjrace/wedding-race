"use client";

import { Title, Text, Anchor, Grid, Divider } from "@mantine/core";

export default function VenueSection({ preWedding }: { preWedding: boolean }) {
  return (
    <section id="venue">
      <Title order={3}>Getting to the venue</Title>
      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            <Anchor
              style={{ padding: "0px", textDecoration: "underline" }}
              href="https://alexander-weddings.co.uk/"
            >
              Lake Henry
            </Anchor>{" "}
            is just 15 minutes off the A1 and the nearest train stations are
            Darlington or Northallerton.
          </Text>

          <Text>
            There is free parking available at the wedding village, at the
            bottom of the venue, for everyone, including those only attending on
            the wedding day.
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

      <Title order={3}>Wedding village</Title>
      <Text>The wedding village will be the centre for most of the fun!</Text>

      <Text>
        The village comes with a laid back communal space where we can gather
        pre-ceremony as well as a place to start celebrations early, and then
        continue the party fireside at the end of the big day! There&apos;ll be
        music, games, tasty food and drinks for us all to enjoy.
      </Text>

      <Text>
        We&apos;ll be providing food and drink for guests invited to the night
        before, and self-service breakfast for both mornings. There&apos;ll also
        be tea and coffee available throughout your stay, and there&apos;s
        fridges plus a food prep area if you want to bring anything yourself
        too.
      </Text>

      <Text>
        If you are staying in the village (or the cottage), the pods come with
        everything you need for a good nights sleep; a comfortable bed, bedding,
        towels, plugs for your gadgets and heating if you need it!
      </Text>

      <Text style={{ fontStyle: "italic" }}>
        Note: If you&apos;re staying off site, please be aware that venue
        restrictions mean only guests staying in the village are able to remain
        there after {preWedding && <>10pm the night before and </>}
        midnight on the night of the wedding.
      </Text>
    </section>
  );
}
