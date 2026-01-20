"use client";

import { useState } from "react";
import {
  Title,
  Text,
  Divider,
  Button,
  Group,
  Accordion,
  Box,
} from "@mantine/core";
import InviteText from "@/components/invitetext";
import { RsvpGuest } from "@/components/rsvpGuest";
import { useRouter } from "next/navigation";
import WeddingTimeline from "./weddingTimeline";
import { IconMail } from "@tabler/icons-react";
import styles from "@/styles/rsvp.module.css";

interface GuestInformation {
  id: string;
  firstname: string;
  surname: string;
  dietary?: string;
  rsvp?: string;
  child?: boolean;
}

interface RsvpFormClientProps {
  partyID: string;
  partyName: string;
  preWedding: boolean;
  guestInformation: GuestInformation[];
  maxAdditionalGuests: number;
  children: number;
}

export default function RsvpFormClient({
  partyID,
  partyName,
  preWedding,
  guestInformation,
  maxAdditionalGuests,
  children,
}: RsvpFormClientProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new globalThis.FormData(form);

    if (typeof window !== "undefined") {
      console.log("RSVP formData entries:", Array.from(formData.entries()));
    }

    const nonChildGuests = guestInformation.filter((g) => !g.child);
    const childGuests = guestInformation.filter((g) => g.child);
    for (let i = 0; i < nonChildGuests.length; i++) {
      const attending = formData.get(`guest-${i}-attending`);
      if (!attending) {
        setError("Please select attending status for all named guests.");
        return;
      }
    }
    for (let i = 0; i < childGuests.length; i++) {
      const attending = formData.get(`child-existing-${i}-attending`);
      if (!attending) {
        setError(
          "Please select attending status for all named guests (including children). Please check the children section.",
        );
        return;
      }
    }

    for (let i = 0; i < maxAdditionalGuests; i++) {
      const firstname = (
        formData.get(`additional-${i}-firstname`) as string
      )?.trim();
      const surname = (
        formData.get(`additional-${i}-surname`) as string
      )?.trim();
      const attending = formData.get(`additional-${i}-attending`);
      if (attending && (!firstname || !surname)) {
        setError(
          "Please provide first name and surname for all additional guests you RSVP for.",
        );
        return;
      }
    }

    setLoading(true);
    window.setTimeout(async () => {
      const res = await globalThis.fetch("/api/submitrsvp", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        router.push(`/rsvp/${data.partyID}`);
        if (typeof window !== "undefined") {
          window.setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 800);
        }
      } else {
        setError(data.error || "Submission failed. Please try again.");
        setLoading(false);
      }
    }, 50);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="partyID" value={partyID} />
      <input type="hidden" name="guestCount" value={guestInformation.length} />

      <Text px={0}>Hey {partyName},</Text>
      <InviteText preWedding={preWedding} />

      <Text px={0}>
        To help you with your plans, expand the timeline section below to see a
        high level outline of your wedding itinerary.
      </Text>

      <Accordion variant="separated" my="md">
        <Accordion.Item value="timeline">
          <Accordion.Control style={{ color: "#c9c9c9" }}>
            View your wedding timeline
          </Accordion.Control>
          <Accordion.Panel>
            <WeddingTimeline preWedding={preWedding} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Text px={0}>
        Please <strong>complete your RSVP below</strong>, after which you'll be
        able to book on-site accommodation.
      </Text>
      <Divider my="md" />

      <Title order={2} px={0}>
        Party details
      </Title>

      <Title order={3} px={0}>
        Your details
      </Title>
      {guestInformation
        .filter((guest) => !guest.child)
        .map((guest, idx) => (
          <div key={guest.id} style={{ marginBottom: 16 }}>
            <input type="hidden" name={`guest-${idx}-id`} value={guest.id} />
            <RsvpGuest
              guest={guest}
              dietaryRequirements={guest.dietary || ""}
              attending={guest.rsvp as "yes" | "no" | undefined}
              fieldNamePrefix={`guest-${idx}-`}
              preWedding={preWedding}
            />
          </div>
        ))}

      {children > 0 && (
        <>
          <Divider my="md" />
          <Title order={3} px={0}>
            Children
          </Title>
          <Text px={0}>
            We've put children in a separate section so we can keep track of how
            many little ones to expect — just RSVP for them below.
          </Text>

          <Text px={0}>
            Whether you bring them with you or would rather have the break is
            totally up to you. We just want you to have a great time! There will
            be kids at the wedding (like Lola), and there will also be parents
            enjoying a child-free break. Whatever you choose, you won't be the
            odd one out.
          </Text>

          <Divider my="md" />

          {guestInformation
            .filter((guest) => guest.child)
            .map((guest, idx) => (
              <div key={guest.id} style={{ marginBottom: 16 }}>
                <input
                  type="hidden"
                  name={`child-existing-${idx}-id`}
                  value={guest.id}
                />
                <RsvpGuest
                  guest={guest}
                  dietaryRequirements={guest.dietary || ""}
                  attending={guest.rsvp as "yes" | "no" | undefined}
                  fieldNamePrefix={`child-existing-${idx}-`}
                  preWedding={preWedding}
                  additional={false}
                />
              </div>
            ))}

          {[
            ...Array(
              children - guestInformation.filter((g) => g.child).length > 0
                ? children - guestInformation.filter((g) => g.child).length
                : 0,
            ),
          ].map((_, idx) => (
            <div key={`child-additional-${idx}`} style={{ marginBottom: 16 }}>
              <RsvpGuest
                guest={{
                  id: `child-additional-${idx}`,
                  firstname: "",
                  surname: "",
                }}
                dietaryRequirements=""
                attending={undefined}
                fieldNamePrefix={`child-additional-${idx}-`}
                additional={true}
                preWedding={preWedding}
              />
            </div>
          ))}
        </>
      )}

      {maxAdditionalGuests > 0 && (
        <>
          <Divider my="md" />
          <Title order={3} px={0}>
            We're offering plus ones!
          </Title>
          <Text px={0}>
            Please feel welcome to bring up to {maxAdditionalGuests} additional{" "}
            {maxAdditionalGuests === 1
              ? "guest as your plus one"
              : "guests as your plus ones"}
            .
          </Text>
          <Text px={0}>
            If you aren't sure who this will be yet, but want to secure a space
            anyway just add as a TBC. We'll need to know their final details by
            end of February 2026 and will follow up with you separately to
            confirm.
          </Text>
          <Divider my="md" />
          {[...Array(maxAdditionalGuests)].map((_, idx) => (
            <div key={`additional-${idx}`} style={{ marginBottom: 16 }}>
              <RsvpGuest
                guest={{
                  id: `additional-${idx}`,
                  firstname: "",
                  surname: "",
                }}
                dietaryRequirements=""
                attending={undefined}
                fieldNamePrefix={`additional-${idx}-`}
                additional={true}
                preWedding={preWedding}
              />
            </div>
          ))}
        </>
      )}
      <Divider my="lg" />

      <Group mt="md">
        <Button
          fullWidth
          type="submit"
          loading={loading}
          disabled={loading}
          rightSection={<IconMail size={18} />}
          className={styles.rsvpInvertHoverButton}
        >
          Submit RSVP
        </Button>
        {error && (
          <Box
            mt="xs"
            p="sm"
            bg="red.9"
            w="100%"
            style={{ borderRadius: 6, textAlign: "center" }}
          >
            <Text c="white" size="sm" fw="bold">
              {error}
            </Text>
          </Box>
        )}
      </Group>
    </form>
  );
}
