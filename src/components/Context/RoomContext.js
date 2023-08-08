import React, { createContext, useContext, useState } from "react";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [room, setRoom] = useState("");

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => {
  return useContext(RoomContext);
};
