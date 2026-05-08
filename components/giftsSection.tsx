"use client";

import { Title, Text, Anchor } from "@mantine/core";

export default function GiftsSection() {
  return (
    <section id="gifts">
      <Title px={0} order={2}>
        Gifts
      </Title>
      <Text px={0} mb="md">
        Your presence at our wedding is a gift enough!
      </Text>

      <Text px={0} mb="md">
        However, if you do wish to contribute a gift, we have set up a PayPal me
        where you can{" "}
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
    </section>
  );
}
