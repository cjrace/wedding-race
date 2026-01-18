import { Fieldset, Text, TextInput, Radio, Group } from "@mantine/core";

export interface RsvpGuestProps {
  guest: {
    id: string | number;
    firstname: string;
    surname: string;
  };
  dietaryRequirements?: string;
  attending?: "yes" | "no";
  fieldNamePrefix?: string;
}

export function RsvpGuest({
  guest,
  dietaryRequirements = "",
  attending,
  fieldNamePrefix = "",
}: RsvpGuestProps) {
  return (
    <Fieldset key={guest.id} mb="md">
      <Text>
        {guest.firstname} {guest.surname}
      </Text>
      <TextInput
        label="Dietary requirements"
        placeholder="e.g., vegetarian, gluten-free, etc."
        mb="sm"
        name={`${fieldNamePrefix}dietary`}
        defaultValue={dietaryRequirements}
      />
      <Radio.Group
        name={`${fieldNamePrefix}attending`}
        label="Attending"
        required
        withAsterisk
        mt="lg"
        defaultValue={attending}
      >
        <Group my="sm">
          <Radio value="yes" label="Yes, I will be attending" />
          <Radio value="no" label="No, I won't be attending" />
        </Group>
      </Radio.Group>
    </Fieldset>
  );
}
