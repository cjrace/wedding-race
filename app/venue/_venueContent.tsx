"use client";

import { Title, Text, Space, Grid, Divider, Anchor } from "@mantine/core";
import Image from "next/image";
import FullVillage from "@/public/images/full-village.png";
import Cottages from "@/public/images/cottages.png";
import OverlayCard from "@/components/overlaycard";
import PizzaOven from "@/public/images/pizza-oven.png";
import GetReadyHut from "@/public/images/get-ready-hut.png";
import BreakfastShack from "@/public/images/breakfast-shack.png";

export default function VenueContent() {
  return (
    <>
      <Text>
        Our wedding celebration will be over multiple days. Check out the{" "}
        <Anchor
          style={{ padding: "0px", textDecoration: "underline" }}
          href="/rsvp"
        >
          RSVP page
        </Anchor>{" "}
        and enter your invite code for more details about the plans for each
        day.
      </Text>

      <Divider my="md" />

      <Title order={2}>Venue</Title>

      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            <Anchor
              style={{ padding: "0px", textDecoration: "underline" }}
              href="https://alexander-weddings.co.uk/"
            >
              Lake Henry
            </Anchor>{" "}
            is just 15 minutes off the A1 and is reachable by train links to
            Darlington or Northallerton.
          </Text>

          <Text>
            There&apos;s on-site accommodation for up to 79 of our guests, with
            the wedding village hosting our before and after party!
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

      <Divider my="md" />

      <Title order={2}>Wedding village</Title>

      <Grid align="center">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            Stay in our 31 pod wedding village to be closest to the fun!
          </Text>

          <Text>
            The village comes with a laid back communal space where we can start
            celebrations early (and continue the party after our big day!).
            There&apos;ll be music, games, tasty food and drinks for us all to
            enjoy.
          </Text>

          <Text>
            We&apos;ll be providing food and drink for guests invited to the
            night before, and breakfast for both mornings. There&apos;ll also be
            self-service tea and coffee available throughout your stay, and
            there&apos;s fridges plus a food prep area if you want to bring
            anything yourself too.
          </Text>

          <Text>
            The pods come with everything you need for a good nights sleep; a
            comfortable bed, bedding, towels, plugs for your gadgets and heating
            if you need it!
          </Text>

          <Text>
            Pod options include twin, double, family and en-suite pods, some
            family pods can sleep 3 adults if needed.
          </Text>

          <Text>
            Pod prices start from £150 for one night and £260 for two nights, if
            this is prohibitive for you then let us know.
          </Text>

          <Text>
            There is free parking available for those staying on site (though
            let us know in advance if you have multiple cars).
          </Text>

          <Text>
            You'll get the details for booking accommodation on site when you
            RSVP, if you have any questions as you're booking or need support,
            just let us know.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            src={FullVillage}
            alt="Cottages"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Grid.Col>
      </Grid>

      <Divider my="md" />

      <Title order={2}>On site cottages</Title>

      <Grid>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Text>
            For those that want to stay on site but don&apos;t fancy the pod
            life, we also have two cottages with three double bedrooms in each.
          </Text>

          <Text>
            For the night before the wedding one of the cottages will be
            reserved for the bride and bridesmaids, but otherwise (whilst very
            limited) these rooms will be free for you to use too.
          </Text>

          <Text>
            If you&apos;d prefer one of the cottage rooms, let us know.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image
            src={Cottages}
            alt="Cottages"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Grid.Col>
      </Grid>

      <Divider my="md" />

      <Title order={2}>Local hotels</Title>

      <Text>
        If you&apos;d prefer a local hotel, we&apos;d recommend looking in
        Darlington or Northallerton, which are 15 and 20 minutes away by car
        respectively.
      </Text>

      <Text>
        Any taxis will need to be pre-booked, let us know if you need help with
        finding recommended local taxi companies.
      </Text>

      <Divider my="md" />

      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <OverlayCard
            cardKey="pizzaOven"
            image={PizzaOven}
            overlay="At the pre-wedding village party we'll be serving
                    freshly made pizzas from our oven, hot and delicious!"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <OverlayCard
            cardKey="gettingReady"
            image={GetReadyHut}
            overlay="The pods all have plenty of space but for something more
                    sociable you can get ready together in the makeup hut!"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <OverlayCard
            cardKey="breakfastShack"
            image={BreakfastShack}
            overlay="Self-serve breakfast will be available for everyone staying
                    at the wedding village."
          />
        </Grid.Col>
      </Grid>

      <Space h="xl" />
    </>
  );
}
