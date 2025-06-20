import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useRequest } from "../../../../redux/hooks/use-request";
import { getReviews } from "../../../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../../../redux/entities/users/get-users";
import { REQUEST_STATUS } from "../../../../constants/request-status";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";


import { Review } from "./review";

export const Reviews = () => {

  const { restaurantId } = useParams();

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

  const reviewsRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers);
  

  if (reviewsRequestStatus === REQUEST_STATUS.PENDING || usersRequestStatus === REQUEST_STATUS.PENDING) {
    return "Loading...";
  }

  if (reviewsRequestStatus === REQUEST_STATUS.REJECTED || usersRequestStatus === REQUEST_STATUS.REJECTED) {
    return "error";
  }

  return (
    <>
      {restaurant.reviews.length === 0 ? (
        <h4 style={{ color: "burlywood" }}>Отзывов пока нет</h4>
      ) : (
        <>
          <h3 style={{ color: "ButtonText" }}>Отзывы:</h3>
          <ul>
            {restaurant.reviews.map((id) => (
              <li style={{ listStyleType: "none", color: "green" }} key={id}>
                <Review reviewId={id} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
