import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return <UserContext value={{ auth, setUserName }}>{children}</UserContext>;
};
