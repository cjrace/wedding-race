"use client";

import { Title, Text, Divider, Anchor, List } from "@mantine/core";

export default function OnTheDaySection() {
  return (
    <section id="on-the-day">
      <Title order={2}>On the day</Title>
      <Text>
        Everything you need to know ahead of the big day. If you have any
        questions not covered here, just drop us a message!
      </Text>

      <Divider my="md" />

      <Title order={3}>Arrival</Title>
      <Text>
        Guests will be seated for the ceremony at 12:45, so please make sure
        you&apos;re at the venue and ready before then — aiming for 12:30 is a
        sensible target.
      </Text>
      <Text>
        If you arrive early there&apos;ll be people around to point you in the
        right direction, and you&apos;ll be able to wait with other guests in
        the wedding village. A handful will already be there from the night
        before, so you won&apos;t be alone no matter how early you get there.
      </Text>

      <Divider my="md" />

      <Title order={3}>Parking</Title>
      <Text>
        Everyone is parking at the village — there&apos;s no separate parking at
        the ceremony venue.{" "}
        {/* PLACEHOLDER — anything to add about arrival times, where exactly to park, signage? */}
      </Text>

      <Divider my="md" />

      <Title order={3}>Local taxis</Title>
      <Text>
        If you&apos;re heading off-site or need to arrange a lift, here are
        local taxi firms that cover the area:
      </Text>
      <Text style={{ fontStyle: "italic" }}>
        {/* PLACEHOLDER — add taxi firm names and phone numbers here */}
        Taxi firm details coming soon — check back or drop us a message for
        recommendations.
      </Text>

      <Divider my="md" />

      <Title order={3}>What to pack &amp; footwear</Title>
      <Text>
        The wedding village has gravel paths between the pods, so if it rains
        you might want a second pair of shoes for later in the evening. Most of
        the main areas of the day — ceremony, dinner, dancing — are on hard or
        wooden ground, so heels and dress shoes will be fine for those parts.
      </Text>
      <Text>
        {/* PLACEHOLDER — anything else worth flagging? Layers for the evening? Sunscreen if hot? */}
      </Text>

      <Divider my="md" />

      <Title order={3}>What to wear</Title>
      <Text>
        For the wedding day itself, fancy it up — most people will be in the
        usual wedding garb of suits and dresses. It will be summer, so make sure
        you&apos;re comfortable too.
      </Text>
      <Text>
        For all other times during your stay, wear whatever makes you feel
        comfortable. If you&apos;re worried about clashing with the bridesmaids,
        just drop us a message and we&apos;ll let you know the colours.
      </Text>

      <Divider my="md" />

      <Title order={3}>Getting ready</Title>
      <Text>
        The pods are spacious enough that getting ready in your own space
        shouldn&apos;t be a problem, but for something more sociable we have a
        dedicated makeup hut for beautifying yourself with company.
      </Text>
      <Text>
        Bridesmaids will be getting ready in the cottages, which has a dedicated
        room set up for hair and makeup.
      </Text>

      <Divider my="md" />

      <Title order={3}>Ceremony seating</Title>
      <Text>
        The front row will be reserved for the wedding party. After that, please
        sit wherever you like — many of our friends are shared between us, so
        there&apos;s no specific &quot;Laura side&quot; or &quot;Cam side&quot;.
        Pick a seat and settle in!
      </Text>
      <Text>
        <strong>One quick ask:</strong> please don&apos;t take any photos during
        the ceremony itself. We have our own photographer covering it, and we
        want everyone to be present in the moment with us. You&apos;ll have
        plenty of opportunities to snap away once we&apos;re back out of the
        ceremony tent — see the next section!
      </Text>

      <Divider my="md" />

      <Title order={3}>Photos &amp; the shared album</Title>
      <Text>
        We&apos;ve set up a shared Google Photos album so everyone can pool the
        pictures they take throughout the day (and the night before, if
        you&apos;re joining for that). Please add yours — we&apos;d love to see
        the day through your eyes, and it means everyone gets to enjoy the
        photos together afterwards.
      </Text>
      <Text>
        <Anchor
          href="https://photos.app.goo.gl/GvyQND53UQbxKsAA6"
          target="_blank"
          px={0}
          style={{ textDecoration: "underline" }}
        >
          Add your photos to the shared album
        </Anchor>
      </Text>
      <Text>
        A reminder: no photos during the ceremony please — our photographer has
        it covered. Anywhere else, fire away!
      </Text>

      <Divider my="md" />

      <Title order={3}>Children</Title>
      <Text>
        Bringing kids is completely up to you. We&apos;re expecting Lola plus a
        handful of other little ones at the wedding, so they won&apos;t be
        alone.
      </Text>
      <Text>
        We also know some couples will be using the wedding as a perfectly good
        excuse for a kid-free escape — that&apos;s absolutely fine too, no
        guilt. If you are bringing children, please include them when you RSVP
        so we can make sure everything&apos;s prepared for them to have a great
        time too.
      </Text>
      <Text>For the under-5s specifically, we&apos;ve got it covered:</Text>
      <List px={20} my="sm">
        <List.Item>
          Dedicated children&apos;s food at the wedding breakfast
        </List.Item>
        <List.Item>A high chair for every under-5</List.Item>
        <List.Item>A soft play area set up in the tipi</List.Item>
        <List.Item>
          The living room of one of the cottages reserved as a quiet retreat
          space if anyone needs a break
        </List.Item>
      </List>
      <Text>
        {/* PLACEHOLDER — anything about nap timings, baby-changing facilities, parental help on the day? */}
      </Text>

      <Divider my="md" />

      <Title order={3}>House rules</Title>
      <Text>A couple of venue restrictions to flag:</Text>
      <List px={20} my="sm">
        <List.Item>
          No fireworks — the venue is very close to local farms and wildlife.
        </List.Item>
        <List.Item>No dogs in the wedding village, sadly.</List.Item>
      </List>

      <Divider my="md" />

      <Title order={3}>The village</Title>
      <Text>
        {/*
          PLACEHOLDER — what's there? Fire pits, hot tubs, communal spaces?
          Encourage guests to spend time exploring it / hanging out in shared
          spaces / arriving early enough to enjoy it.
        */}
        The wedding village is more than just somewhere to sleep — it&apos;s a
        big part of the celebration. We&apos;d love for you to make the most of
        it, so arrive early, explore, and enjoy the space with everyone else!
      </Text>

      <Divider my="md" />

      <Title order={3}>Coming and going</Title>
      <Text>
        You&apos;re free to leave the village during your stay (aside from being
        there for the ceremony and main celebrations after!). We&apos;ll provide
        maps of the local area, so if you fancy a walk or a run nearby, go for
        it.
      </Text>

      <Divider my="md" />

      <Title order={3}>After-party</Title>
      <Text>
        The party kicks on from midnight on the wedding day — so pace yourselves
        and save some energy!
        {/* PLACEHOLDER — where exactly is it? What to expect (music, food, drinks)? Any noise reminders? */}
      </Text>

      <Divider my="md" />

      <Title order={3}>Make yourself at home</Title>
      <Text>
        Join in for as much or as little as feels right. The pods are all yours
        from the moment you check in, so feel free to slip away for some quiet
        time whenever you need it — you won&apos;t miss anything important, and
        nobody&apos;s keeping score.
      </Text>
    </section>
  );
}
