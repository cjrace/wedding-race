"use client";

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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    textAlign: "center" as const,
    fontFamily: "Courier New",
    fontWeight: "bold" as const,
    gap: "10px",
    border: "2px solid #F9AA8E",
    padding: "10px",
    borderRadius: "10px",
    minHeight: "120px",
    alignItems: "center",
    justifyItems: "center",
  };

  return (
    <div suppressHydrationWarning={true}>
      {remainingTime === null ? (
        <div style={gridStyle}>
          <div
            style={{
              gridColumn: "1 / -1",
              width: "100%",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            Calculating countdown...
          </div>
        </div>
      ) : (
        (() => {
          const { days, hours, minutes, seconds } =
            calculateTimeRemaining(remainingTime);
          return days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
            <div style={gridStyle}>
              <div
                style={{
                  gridColumn: "1 / -1",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                It&apos;s party time!
              </div>
            </div>
          ) : (
            <div style={gridStyle}>
              {[
                { value: days, label: "days" },
                { value: hours, label: "hours" },
                { value: minutes, label: "minutes" },
                { value: seconds, label: "seconds" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: "#ffd7d3",
                    color: "#242424",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{value}</div>
                  <div>{label}</div>
                </div>
              ))}
            </div>
          );
        })()
      )}
    </div>
  );
};

export default Countdown;
