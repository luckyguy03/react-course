import { useSelector } from "react-redux";
import { selectReviewById } from "../../../../redux/entities/reviews/slice";
import { ReviewUser } from "./review-user";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Review = ({ reviewId }) => {
  const review = useSelector(
    (state) => selectReviewById(state, reviewId) || {},
  );

  return (
    <div className={styles.review}>
      <ReviewUser userId={review.userId} /> -{" "}
      <span style={{ color: "black" }}>
        {review.text} - Rating({review.rating})
      </span>
    </div>
  );
};
