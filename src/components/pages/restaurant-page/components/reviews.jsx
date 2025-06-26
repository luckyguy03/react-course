import { useParams } from "react-router";
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../../../redux/api/index";

import { Review } from "./review";

export const Reviews = () => {

  const { restaurantId } = useParams();
  const { data: reviews, isLoading: reviewsIsLoading, isError: reviewsIsError } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const { isLoading: usersIsLoading, isError: usersIsError } = useGetUsersQuery();
  if (reviewsIsLoading || usersIsLoading) {
    return "Loading...";
  }

  if (reviewsIsError || usersIsError) {
    return "error";
  };

  return (
    <>
      {reviews.length === 0 ? (
        <h4 style={{ color: "burlywood" }}>Отзывов пока нет</h4>
      ) : (
        <>
          <h3 style={{ color: "ButtonText" }}>Отзывы:</h3>
          <ul>
            {reviews.map((review) => (
              <li style={{ listStyleType: "none", color: "green" }} key={review.id}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
