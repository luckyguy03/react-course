import { useState } from "react";
import { ReviewContext } from ".";

export const ReviewContextProvider = ({ children }) => {
  const [reviewObject, setReview] = useState({});

  return <ReviewContext value={{ reviewObject, setReview }}>{children}</ReviewContext>;
};
