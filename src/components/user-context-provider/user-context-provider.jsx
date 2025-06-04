import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });
  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: "Andrey" };
    });
  };

  return (
    <UserContext value={{ auth, toggleAuth }}>
      {children}
    </UserContext>
  );
};
