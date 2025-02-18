"use client";

import { Text } from "@mantine/core";
import { useEffect, useState, useCallback, useMemo } from "react";

export default function DaysToGo() {
  const weddingDate = useMemo(() => {
    const date = new Date(process.env.WEDDING_DATE || "");
    date.setUTCHours(12, 0, 0, 0); // Set the wedding time to 1pm UK time (which is 12pm UTC in June)
    console.log(date);
    return date;
  }, []);
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    let timeLeft;

    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  }, [weddingDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <Text>
      {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
      {timeLeft.seconds} seconds
    </Text>
  );
}
