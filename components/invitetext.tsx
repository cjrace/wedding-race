import { Text } from "@mantine/core";

export default function InviteText({ preWedding }: { preWedding: boolean }) {
  const inviteText = preWedding
    ? "We are thrilled to invite you to our three-day wedding celebration from X to Y!"
    : "We are delighted to invite you to our wedding day on the X!";

  return <Text>{inviteText}</Text>;
}
