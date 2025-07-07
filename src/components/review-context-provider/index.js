import { createContext } from "react";

export const ReviewContext = createContext({
  reviewObject: {},
  setReview: () => {},
});
