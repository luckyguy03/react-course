import { createContext } from "react";

export const UserContext = createContext({
  auth: "",
  setUser: (userName) => {auth = userName},
});
