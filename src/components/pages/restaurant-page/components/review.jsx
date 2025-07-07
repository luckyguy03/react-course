import { ReviewUser } from "./review-user";
import { Button } from "../../../button/button";
import { ReviewContext } from "../../../review-context-provider/index";
import { useContext } from "react";
import { UserContext } from "../../../user-context-provider/index";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Review = ({ review }) => {
  const {
    auth: { isAuthorized, userId },
  } = useContext(UserContext);

  const { setReview } = useContext(ReviewContext);

  return (
    <div className={styles.review}>
      <ReviewUser userId={review.userId} /> -{" "}
      <span className={styles.reviewText}>
        {review.text} - Rating({review.rating})
      </span>
      {isAuthorized && review.userId == userId && (
        <Button
          onClick={() =>
            setReview({
              review: {
                reviewText: review.text,
                reviewRating: review.rating,
                reviewId: review.id,
              },
            })
          }
          title={"Изменить"}
          size="400"
        />
      )}
    </div>
  );
};
