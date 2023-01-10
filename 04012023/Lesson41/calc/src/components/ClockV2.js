import React, { useEffect, useState } from "react";
function ClockV2(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <h2 id="test">It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default ClockV2;
