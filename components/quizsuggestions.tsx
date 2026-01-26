"use client";
import React, { useState } from "react";
import { TextInput, Button, Text, Stack } from "@mantine/core";
import styles from "@/styles/rsvp.module.css";

interface QuizSuggestionsProps {
  inviteId: string;
}

export default function QuizSuggestions({ inviteId }: QuizSuggestionsProps) {
  const [suggestion, setSuggestion] = useState("");
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await globalThis.fetch("/api/quiz-suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteId, suggestion }),
      });
      if (res.ok) {
        setStatus("success");
        setSuggestion("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={8}>
        <TextInput
          px={0}
          mb="sm"
          id="quiz-suggestion"
          aria-label="Suggestions for the quiz"
          value={suggestion}
          onChange={(e) => setSuggestion(e.currentTarget.value)}
          required
          maxLength={200}
          placeholder="Your suggestion..."
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          loading={status === "loading"}
          variant="filled"
          fullWidth
          className={styles.rsvpInvertHoverButton}
        >
          Submit quiz suggestion
        </Button>
        {status === "success" && (
          <Text px={0}>Thank you for your suggestion!</Text>
        )}
        {status === "error" && (
          <Text px={0}>There was an error. Please try again.</Text>
        )}
      </Stack>
    </form>
  );
}
