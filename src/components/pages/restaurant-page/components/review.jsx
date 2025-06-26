import { ReviewUser } from "./review-user";

import styles from "../../restaurant-page/restaurant-page.module.css";
import { Link } from "react-router";
import { Button } from "../../../button/button";


export const Review = ({ review }) => {

  return (
    <div className={styles.review}>
      <ReviewUser userId={review.userId} /> - {" "}
      <span style={{ color: "black" }}>
        {review.text} - Rating({review.rating})
      </span>
    </div>
  );
};
