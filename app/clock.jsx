'use client'

import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    // Check if running on the client side
    const intervalId = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => {
      // Clear the interval only if it was set on the client side
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []); // Empty ensures the effect runs only once on mount

  const formattedTime = localTime.toLocaleTimeString();

  return (
    <div>
      <p>Your local time is: </p>
      <code className="font-mono font-bold">{formattedTime}</code>
    </div>
  );
};

export default Clock;
