import { ReviewUser } from "./review-user";
import { Button } from "../../../button/button";
import { ReviewContext } from "../../../review-context-provider/index";
import { useContext } from "react";
import { UserContext } from "../../../user-context-provider/index";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Review = ({review}) => {
  const {
      auth: { isAuthorized },
    } = useContext(UserContext);

  const { setReview } = useContext(ReviewContext);
  // Установить контекст
  const changeReview = (reviewObject) => {
    setReview(reviewObject);
  }
  
  return (
    <div className={styles.review}>
      <ReviewUser userId={review.userId} /> - {" "}
      <span style={{ color: "black" }}>
        {review.text} - Rating({review.rating})
      </span>
      {isAuthorized && (review.userId == "20bed9b5-9c7b-4771-8221-75b74ed1904a") && (
      <Button
          onClick={() => changeReview({ review: { reviewText:review.text, reviewRating: review.rating, reviewId: review.id } })}
          title={"Изменить"}
          size="400"
      ></Button>)}
    </div>
  );
};
