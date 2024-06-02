// hooks/useGreeting.ts

import { useState, useEffect } from "react";

function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hours12 = hours % 12 || 12; // Convert 0 to 12 for midnight
  const ampm = hours >= 12 ? "PM" : "AM";
  const minutesPadded = minutes.toString().padStart(2, "0");
  return `${hours12}:${minutesPadded} ${ampm}`;
}

function getGreeting(date: Date): string {
  const hours = date.getHours();
  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

export function useGreeting(): [string, string] {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateGreetingAndTime() {
      const now = new Date();
      const greetingMessage = getGreeting(now);
      const formattedTime = formatTime(now);
      setGreeting(greetingMessage);
      setTime(formattedTime);
    }

    updateGreetingAndTime(); // Initial call to set the greeting and time immediately

    const intervalId = setInterval(updateGreetingAndTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return [greeting, time];
}
