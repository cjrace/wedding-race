"use client";

import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

interface DaysToGoProps {
  date: Date;
}

const calculateTimeRemaining = (time: number) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const DaysToGo: React.FC<DaysToGoProps> = ({ date }) => {
  const calculateTimeDifference = (targetDate: Date) => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    return target - now;
  };

  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const timeLeft = calculateTimeDifference(date);
    setRemainingTime(timeLeft);

    const countdownInterval = setInterval(() => {
      const timeLeft = calculateTimeDifference(date);
      setRemainingTime(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [date]);

  if (remainingTime === null) {
    return <Text>Calculating countdown...</Text>;
  }

  const { days, hours, minutes, seconds } =
    calculateTimeRemaining(remainingTime);

  return (
    <Text>
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0
        ? "It's party time!"
        : `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
    </Text>
  );
};

export default DaysToGo;
