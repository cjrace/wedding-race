import { Fieldset, Text, TextInput, Radio, Group } from "@mantine/core";

export interface RsvpGuestProps {
  guest: {
    id: string | number;
    firstname: string;
    surname: string;
  };
  dietaryRequirements?: string;
  attending?: "yes" | "no" | "yes-prewedding" | "yes-wedding";
  fieldNamePrefix?: string;
  additional?: boolean;
  preWedding?: boolean;
}

export function RsvpGuest({
  guest,
  dietaryRequirements = "",
  attending,
  fieldNamePrefix = "",
  additional = false,
  preWedding = false,
}: RsvpGuestProps) {
  return (
    <Fieldset key={guest.id} mb="md">
      {additional ? (
        <>
          <TextInput
            label="First name"
            name={`${fieldNamePrefix}firstname`}
            mb="sm"
            defaultValue={guest.firstname}
            withAsterisk={false}
            required={false}
          />
          <TextInput
            label="Surname"
            name={`${fieldNamePrefix}surname`}
            mb="sm"
            defaultValue={guest.surname}
            withAsterisk={false}
            required={false}
          />
        </>
      ) : (
        <Text>
          {guest.firstname} {guest.surname}
        </Text>
      )}
      <TextInput
        label="Dietary requirements"
        placeholder="e.g., vegetarian, gluten-free, etc."
        mb="sm"
        name={`${fieldNamePrefix}dietary`}
        defaultValue={dietaryRequirements}
        withAsterisk={false}
        required={false}
      />
      <Radio.Group
        name={`${fieldNamePrefix}attending`}
        label="Attending"
        required={!additional}
        withAsterisk={!additional}
        mt="lg"
        defaultValue={attending}
      >
        <Group my="sm">
          {preWedding ? (
            <>
              <Radio
                value="yes-prewedding"
                label="I will attend both the pre-wedding and wedding"
              />
              <Radio
                value="yes-wedding"
                label="I can attend only the wedding"
              />
              <Radio value="no" label="I can't attend" />
            </>
          ) : (
            <>
              <Radio value="yes" label="Yes, I will be attending" />
              <Radio value="no" label="No, I won't be attending" />
            </>
          )}
        </Group>
      </Radio.Group>
    </Fieldset>
  );
}
