import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [userName, setUser] = useState("");
  const isAuthorized = !!userName;
  
  return <UserContext value={{ userName, setUser, isAuthorized }}>{children}</UserContext>;
};
