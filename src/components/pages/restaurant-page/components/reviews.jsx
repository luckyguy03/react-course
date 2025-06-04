import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";
import { Review } from "./review";

export const Reviews = ({restaurantId}) => {

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

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
                <Review reviewId={id}/>  
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};