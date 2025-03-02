"use client";

import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

interface CountdownProps {
  date: Date;
}

const calculateTimeRemaining = (time: number) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const calculateTimeDifference = (targetDate: Date) => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    return target - now;
  };

  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const initialTimeLeft = calculateTimeDifference(date);
    setRemainingTime(initialTimeLeft);

    const countdownInterval = setInterval(() => {
      const updatedTimeLeft = calculateTimeDifference(date);
      setRemainingTime(updatedTimeLeft);
      if (updatedTimeLeft <= 0) {
        setRemainingTime(0);
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [date]);

  if (remainingTime === null) {
    return <div suppressHydrationWarning={true}>Calculating countdown...</div>;
  }

  return (
    <div suppressHydrationWarning={true}>
      {(() => {
        const { days, hours, minutes, seconds } = calculateTimeRemaining(remainingTime);
        return (
          <>
            {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
              <div>It's party time!</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', fontFamily: "Courier New", fontWeight: 'bold', gap: '10px', border: '2px solid #F9AA8E', padding: '10px', borderRadius: '10px' }}>
                <div style={{ backgroundColor: '#ffd7d3', color: '#242424', padding: '10px', borderRadius: '10px'  }}>
                  <div style={{ fontSize: '2rem' }}>{days}</div>
                  <div>days</div>
                </div>
                <div style={{ backgroundColor: '#ffd7d3', color: '#242424', padding: '10px', borderRadius: '10px'  }}>
                  <div style={{ fontSize: '2rem' }}>{hours}</div>
                  <div>hours</div>
                </div>
                <div style={{ backgroundColor: '#ffd7d3', color: '#242424', padding: '10px', borderRadius: '10px'  }}>
                  <div style={{ fontSize: '2rem' }}>{minutes}</div>
                  <div>minutes</div>
                </div>
                <div style={{ backgroundColor: '#ffd7d3', color: '#242424', padding: '10px', borderRadius: '10px'   }}>
                  <div style={{ fontSize: '2rem' }}>{seconds}</div>
                  <div>seconds</div>
                </div>
              </div>
            )}
          </>
        );
      })()}
    </div>
  );
};

export default Countdown;
