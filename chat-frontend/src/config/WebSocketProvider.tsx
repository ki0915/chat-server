import React, { createContext, useRef } from "react";
import websocket, { Socket } from "socket.io-client";

const websocketContext = createContext<any>(null);

const initialize = ({ children }: { children: React.ReactNode }) => {
  const  ref = useRef<Socket | null>(null);
  const ws = websocket("ws://localhost:6000/chats");

  if (!ref.current) {
    ws.on("connect", () => {
      console.log("connected");
    });

    ws.on("error", (e) => {
      console.log(e);
    });

    ws.on("disconnect", () => {
      console.log("disconnected");
    });
    ws.connect();
    ref.current = ws;
  }

  return (
    <websocketContext.Provider value={ref}>
      {children}
    </websocketContext.Provider>
  );
};

export { websocketContext };
export default initialize;
