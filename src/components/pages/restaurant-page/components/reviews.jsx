import { useParams } from "react-router";
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../../../redux/api/index";
import { Review } from "./review";

import styles from "../restaurant-page.module.css";

export const Reviews = () => {
  const { restaurantId } = useParams();
  const {
    data: reviews,
    isLoading: reviewsIsLoading,
    isError: reviewsIsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const { isLoading: usersIsLoading, isError: usersIsError } =
    useGetUsersQuery();
  if (reviewsIsLoading || usersIsLoading) {
    return "Loading...";
  }

  if (reviewsIsError || usersIsError) {
    return "error";
  }

  return (
    <>
      {reviews.length === 0 ? (
        <h4 className={styles.emptyReviewHeader}>Отзывов пока нет</h4>
      ) : (
        <>
          <h3 className={styles.nonEmptyReviewHeader}>Отзывы:</h3>
          <ul>
            {reviews.map((review) => (
              <li className={styles.reviewItem} key={review.id}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
