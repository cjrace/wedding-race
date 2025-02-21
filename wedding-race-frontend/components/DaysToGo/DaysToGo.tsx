"use client";

import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

const DaysToGo = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const weddingDateString =
      process.env.NEXT_PUBLIC_WEDDING_DATE || "2026-12-25T12:00:00";
    const weddingDate = new Date(weddingDateString);
    /* console.log("Wedding Date from env:", weddingDateString); console.log("Parsed Wedding Date:", weddingDate); */

    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = weddingDate.getTime();
      const remainingTime = Math.max(eventTime - currentTime, 0);

      setTimeRemaining(remainingTime);

      if (remainingTime === 0) {
        clearInterval(countdownInterval);
        alert("It's party time!");
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const countdown = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = countdown(timeRemaining);

  return (
    <Text>
      {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </Text>
  );
};

export default DaysToGo;
