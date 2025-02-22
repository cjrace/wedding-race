import { Title, Text, Space, Grid } from "@mantine/core";

export default function AccommodationPage() {
  return (
    <>
      <Title order={1}>Accommodation</Title>
      <Space h="lg" />

      <Text>
        Our wedding celebration will be over three days. We&apos;d love for you to join us the night before and stay
        until the morning after if you&apos;re able. If that&apos;s not possible, no worries, just come for the wedding day.
      </Text>
      <Text>
        Check out our timeline page for more details on the plans for each day.
      </Text>

      <Space h="md" />

      <Title order={2}>Lake Henry venue information</Title>
      <Space h="md" />

      {/*<Grid>
        <Grid.Col span={7}>*/}
          <Text>
            Lake Henry is just 15 minutes off the A1 and is reachable by train links to Darlington or Northallerton.
          </Text>
          <Text>
            There&apos;s on-site accommodation for up to 79 of our guests, with the wedding village hosting our before and after party!
          </Text>
        {/*</Grid.Col>
        <Grid.Col span={5}>*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.389598430681!2d-1.5355666!3d54.4384095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e9965dd84ecd7%3A0xa447869f2ba26fb7!2sAlexander%20Weddings%20%26%20Events!5e0!3m2!1sen!2suk!4v1740190936834!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        {/*</Grid.Col>
      </Grid>*/}      

      <Space h="md" />

      <Title order={2}>Wedding village</Title>
      <Space h="md" />

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
      <Space h="md" />

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
      <Space h="md" />

      <Text>
        If you&apos;d prefer a local hotel, we&apos;d recommend looking in Darlington or Northallerton, which are 15 and 20 
        minutes away by car respectively. You&apos;ll need to pre-book taxis, we&apos;ll share recommended companies nearer the time.
      </Text>
     {/* 
      <List>
        <List.Item>Darlington 15 minutes by car</List.Item>
        <List.Item>Northallerton 20 minutes by car </List.Item>
      </List>
     */}

      <Space h="md" />
    </>
  );
}
