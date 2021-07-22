import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:7000";

export const Client  = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log("Cliente");
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });

  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}