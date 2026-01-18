import { Text } from "@mantine/core";

export default function InviteText({ preWedding }: { preWedding: boolean }) {
  const inviteText = preWedding
    ? "We are thrilled to invite you to our three-day wedding celebration!"
    : "We are delighted to invite you to our wedding day!";

  return <Text>{inviteText}</Text>;
}
