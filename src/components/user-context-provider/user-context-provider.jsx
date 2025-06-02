import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [userName, setUser] = useState("");

  return <UserContext value={{ userName, setUser }}>{children}</UserContext>;
};
