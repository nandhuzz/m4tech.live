import React, { useEffect, useState } from "react";
import config from "./config";
const Youtube = () => {
  const [subscriberValue, updateSubscriberValue] = useState(0);
  const { apiKey, channelId } = config;
  const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
   fetch(apiCall)
  .then((response) => response.json())
  .then((data) => {
    const count = data.items[0].statistics.subscriberCount;
    updateSubscriberValue(count);
  });

  useEffect(() => {
      setInterval(() => {
        fetch(apiCall)
    .then((response) => response.json())
    .then((data) => {
      const count = data.items[0].statistics.subscriberCount;
      updateSubscriberValue(count);
    });

      }, 50000);
  }, []);

  
  return (
    <div>
        <h2>M4 Tech Live Subscriber Count</h2>
      <h1> {subscriberValue}* </h1>
    </div>
  );
};

export default Youtube;