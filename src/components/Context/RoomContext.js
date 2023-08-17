import React, { createContext, useContext, useState, useEffect } from "react";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const storedRoom = localStorage.getItem("room");
  const [room, setRoom] = useState(storedRoom ? JSON.parse(storedRoom) : "");

  useEffect(() => {
    localStorage.setItem("room", JSON.stringify(room));
  }, [room]);

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => {
  return useContext(RoomContext);
};
