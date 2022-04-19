import React, { useState } from "react";

export default function Demo() {
  const [timer, setTimer] = useState({ hour: 23, minute: 50, second: 58 });

  const start = () => {
    setTimer((prev) => ({
      ...prev,
      second: prev.second + 1,
    }));
  };

  React.useEffect(() => {
    setInterval(() => {
      start();
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (timer.second === 60) {
      setTimer((prev) => ({
        ...prev,
        second: 0,
        minute: prev.minute + 1,
      }));
    }
    if (timer.minute === 60) {
      setTimer((prev) => ({
        ...prev,
        minute: 0,
        hour: prev.hour + 1,
      }));
    }
    if (timer.hour === 24) {
      setTimer((prev) => ({
        ...prev,
        minute: 0,
        second: 0,
        hour: 0,
      }));
    }
  }, [timer]);

  return (
    <h3 style={{ textAlign: "center" }}>
      {timer.hour} : {timer.minute} : {timer.second}
    </h3>
  );
}
