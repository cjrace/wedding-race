"use client";

import { Text, Title, Space, Divider, Anchor } from "@mantine/core";

export default function FAQsContent() {
  return (
    <>
      <Text>
        Here&apos;s some common questions we&apos;ve been asked about the
        wedding in case it&apos;s helpful, though please just drop us a message
        if there&apos;s anything else you&apos;d like to know!
      </Text>

      <Divider my="md" />

      <Title order={2}>Will there be a formal invite at some point?</Title>
      <Text>
        Yes, formal invites are being sent out currently, giving you a way to
        RSVP and let us know any guest details. If you haven&apos;t received one
        by the end of February, please let us know!
      </Text>

      <Divider my="md" />
      <Title order={2}>How do I RSVP?</Title>
      <Text>
        Use the{" "}
        <Anchor
          style={{
            padding: "0px",
            textDecoration: "underline",
          }}
          href="/rsvp"
        >
          RSVP page
        </Anchor>
        !
      </Text>

      <Divider my="md" />
      <Title order={2}>Where is the wedding taking place?</Title>
      <Text>
        Have a look at our{" "}
        <Anchor
          style={{
            padding: "0px",
            textDecoration: "underline",
          }}
          href="/venue"
        >
          venue page
        </Anchor>{" "}
        for all for all the wedding village location, directions, and
        accommodation.
      </Text>

      <Divider my="md" />
      <Title order={2}>Can I bring fireworks?</Title>
      <Text>
        Unfortunately not, as the venue is very close to local farms and
        wildlife.
      </Text>

      <Divider my="md" />
      <Title order={2}>Can I bring my dog?</Title>
      <Text>
        We are very sad to say that dogs aren&apos;t allowed in the wedding
        village.
      </Text>

      <Divider my="md" />
      <Title order={2}>Can I bring my chidren?</Title>
      <Text>
        You can, this is completely up to you. We&apos;re expecting at least a
        couple of small children at the wedding (including Lola) so you
        won&apos;t be alone.
      </Text>
      <Text>
        We also know some couples will be intentionally using the wedding as an
        excuse to escape and that is okay too, you can do that guilt-free!
      </Text>

      <Text>
        If you are bringing children, please include them as a guest when you
        RSVP so we can make sure we have everything prepared so they can have a
        great time too!
      </Text>

      <Divider my="md" />
      <Title order={2}>
        Do I need to join in for everything or is it okay if I just chill in my
        pod?
      </Title>
      <Text>
        Completely up to you! We want you to feel comfortable and enjoy your
        stay so you join in for as much or as little as you like. The pods are
        all yours from the moment you check in so feel free to relax and enjoy
        quiet time in them too!
      </Text>

      <Divider my="md" />
      <Title order={2}>
        What time should I arrive for the wedding if arriving on the day itself?
      </Title>
      <Text>
        Guests will be seated for the ceremony at 12:45, so please make sure
        you&apos;re at the venue and ready before then, 12:30 would be a
        sensible target to aim for!
      </Text>
      <Text>
        If you arrive early there&apos;ll be people around to point you in the
        right direction, and you will be able to wait with other guests in the
        wedding village, a few will already be there from the night before, so
        you won&apos;t be alone no matter how early you get there!
      </Text>

      <Divider my="md" />
      <Title order={2}>
        Will there be somewhere for getting ready before the wedding?
      </Title>
      <Text>
        The wedding village pods are spacious enough that getting ready
        shouldn&apos;t be a problem but for something more socialable we have a
        dedicated makeup shack for beautifying yourself with company.
      </Text>
      <Text>
        For bridesmaids we&apos;ll be getting ready in the cottages, which has a
        dedicated room for make up and hair.
      </Text>

      <Divider my="md" />
      <Title order={2}>What should I wear?</Title>
      <Text>
        For the wedding day itself fancy it up, most people will be wearing the
        usual wedding garb of suits and fancy dresses. It will be summer, so
        make sure you&apos;re comfortable.
      </Text>

      <Text>
        We haven&apos;t finalised colours yet, if you&apos;re worried about
        colour clashing or accidentally matching the bridesmaids just drop us a
        message.
      </Text>

      <Text>
        For all other times, wear whatever makes you feel comfortable.
      </Text>

      <Divider my="md" />
      <Title order={2}>What if I have a dietary restriction?</Title>
      <Text>
        Tell us about dietary requirements as part of your RSVP. We&apos;ll then
        use this info to make sure we have suitable food and drinks for anyone
        staying in the wedding village the night before as well as working with
        the wedding day caterers to make sure there is food everyone can enjoy
        on the day itself.
      </Text>

      <Divider my="md" />
      <Title order={2}>Can I leave the wedding village during my stay?</Title>
      <Text>
        Absolutely, you&apos;re free to come and go as you please (aside from
        being there for ceremony and main celebrations after!). We&apos;ll
        provide maps of the local area so if you want to, you can go for a walk
        or run nearby.
      </Text>

      <Divider my="md" />
      <Title order={2}>
        Do I need to bring any food or drink with me for the evening before?
      </Title>
      <Text>
        For those coming the day before, we will be providing food and drink so
        there&apos;s no need to bring anything, though if you would like to
        bring your own that&apos;s fine too!
      </Text>
      <Text>
        There are bottle fridges available at the village to store drinks and
        we&apos;ll have pizza ovens running, so feel free to get creative if you
        do bring anything along!
      </Text>

      <Divider my="md" />
      <Title order={2}>
        I&apos;m invited to pre-wedding festivities but I&apos;m not staying on
        site?
      </Title>
      <Text>
        That&apos;s not a problem! You&apos;ll just need to leave by 10pm as the
        venue requests that only guests staying on site remain after this time.
      </Text>

      <Divider my="md" />
      <Title order={2}>
        I&apos;m invited to pre-wedding festivities but I can&apos;t make it
        until late?
      </Title>
      <Text>
        No problem! Just join us from whenever you&apos;re able to after 4pm.
      </Text>

      <Divider my="lg" />

      <Space h="xl" />
    </>
  );
}
