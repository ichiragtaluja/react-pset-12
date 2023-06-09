import React, { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const users = [
    {
      id: 1,
      name: "Tanay Pratap",
      email: "tanay@example.com",
      role: "Super Mentor",
    },
    {
      id: 2,
      name: "Tanvi Priya",
      email: "tanvi@example.com",
      role: "CEO",
    },
    {
      id: 3,
      name: "Akanksha Choudhary",
      email: "akanksha@example.com",
      role: "Super Mentor",
    },
  ];
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
