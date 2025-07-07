import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });
  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : {
            isAuthorized: true,
            name: "Diana",
            userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
          };
    });
  };

  return <UserContext value={{ auth, toggleAuth }}>{children}</UserContext>;
};
