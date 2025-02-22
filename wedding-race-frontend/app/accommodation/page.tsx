import { Title, Text, Space, List } from "@mantine/core";

export default function AccommodationPage() {
  return (
    <>
      <Title order={1}>Accommodation</Title>

      <Text>
        Our wedding celebration will be over three days. We&apos;d love for you to join us the night before and stay
        until the morning after if you&apos;re able. If that&apos;s not possible, no worries, just come for the wedding day.
      </Text>
      <Text>
        Check out our timeline page for more details on the plans for each day.
      </Text>

      <Space h="md" />

      <Title order={2}>Lake Henry venue information</Title>

      <Text>
        Lake Henry is just 15 minutes off the A1 and is reachable by train links to Darlington or Northallerton.
      </Text>
      <Text>
        There&apos;s on-site accommodation for up to 79 of our guests, with the wedding village hosting our before and after party!
      </Text>
      <Text>
        Add location google maps link - https://maps.app.goo.gl/9NA1tSsfbKEgFzMH8
      </Text>

      <Space h="md" />

      <Title order={2}>Wedding village</Title>

      <Text>
        Stay in our 31 pod wedding village to be closest to the fun!
      </Text>
      <Text>
        The village comes with a laid back communal space where we can start celebrations early (and continue the
        party after our big day!). There&apos;ll be music, games, tasty food and drinks for us all to enjoy.
      </Text>
      <Text>
        Guests can book to stay for the full two nights (Monday to Wednesday) or for just the night of the wedding.
      </Text>
      <Text>
        Pod prices start from £150 for one night and £260 for two nights, if this is prohibitive for you then let us know.
      </Text>
      <Text>
        There is one parking space available per pod and there&apos;ll be plenty of food (breakfast included!) and drinks provided
        during your stay.
      </Text>
      <Text>
        Pod options include twin, double, family and en-suite pods, some family pods can sleep 3 adults if necessary.
      </Text>
      <Text>
        Booking for the pods will open late 2025, we&apos;ll reach out again to let you know when the link is live.
      </Text>

      <Space h="md" />

      <Title order={2}>On site cottages</Title>

      <Text>
        For those that want to stay on site but don&apos;t fancy the pod life, we also have two cottages with three double
        bedrooms in each.
      </Text>
      <Text>
        For the night before the wedding one of the cottages will be reserved for the bride and bridesmaids, but otherwise
        (whilst very limited) these rooms will be free for you to use too.
      </Text>
      <Text>
        If you&apos;d prefer one of the cottage rooms speak to us to arrange.
      </Text>

      <Space h="md" />

      <Title order={2}>Local hotels</Title>

      <Text>
        If you&apos;d prefer a local hotel, we&apos;d recommend looking in Darlington or Northallerton. You&apos;ll need to
        pre-book taxis, we&apos;ll share recommended companies nearer the time.
      </Text>
      <List>
        <List.Item>Darlington 15 minutes by car</List.Item>
        <List.Item>Northallerton 20 minutes by car </List.Item>
      </List>

      <Space h="md" />
    </>
  );
}
