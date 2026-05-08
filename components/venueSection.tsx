"use client";

import { Title, Text, Divider, Anchor, Grid } from "@mantine/core";
import Image from "next/image";
import FullVillage from "@/public/images/full-village.png";
import Cottages from "@/public/images/cottages.png";

export default function VenueSection({ preWedding }: { preWedding: boolean }) {
  return (
    <section id="venue">
      <Title order={2}>Venue and accommodation</Title>

      <Title order={3}>Venue</Title>

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

      <Title order={3}>Wedding village</Title>

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
            See the{" "}
            <Anchor
              style={{ padding: "0px", textDecoration: "underline" }}
              href="#booking-accommodation"
            >
              booking accommodation section
            </Anchor>{" "}
            below for details on how to secure your pod.
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

      <Title order={3}>On site cottages</Title>

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

      <Title order={3}>Local hotels</Title>

      <Text>
        If you&apos;d prefer a local hotel, we&apos;d recommend looking in
        Darlington or Northallerton, which are 15 and 20 minutes away by car
        respectively.
      </Text>

      <Text>
        Any taxis will need to be pre-booked, let us know if you need help with
        finding recommended local taxi companies. TODO UPDATE THIS.
      </Text>

      <Divider my="md" />

      <Title order={3} id="booking-accommodation">
        Booking accommodation
      </Title>

      <Text>
        To book on-site accommodation please use the Venue&apos;s{" "}
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

      <Text>
        The portal defaults to booking for a two-night stay (8th &amp; 9th),
        {preWedding && (
          <>
            &nbsp;though we understand not everyone can get time away for the
            whole three days so if you can only join us for the one night please
            remember to check and change this to just the 9th if necessary!
          </>
        )}
        {!preWedding && (
          <>
            &nbsp;please remember to change this to just the 9th before booking.
            If you are travelling far and would like to stay the night of the
            8th as well, please feel free to do so, just let us know so we know
            to expect you the night before!
          </>
        )}
      </Text>

      <Text style={{ fontStyle: "italic" }}>
        Note: If you&apos;d prefer to stay off site, please be aware that venue
        restrictions mean only guests staying in the village are able to remain
        there after {preWedding && <>10pm the night before and </>}
        midnight on the night of the wedding. There are local airbnbs, and there
        is one cottage on site (though limited to six guests / three rooms). Let
        us know ASAP if you&apos;d want to make use of the cottage.
      </Text>
    </section>
  );
}
