import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";
import { ReviewForm } from "../../../review-form/review-form";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { Menu } from "./menu";
import { Reviews } from "./reviews";

export const Restautant = ({ restaurantId }) => {
  const { auth:{isAuthorized}} = useContext(UserContext);
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

  return (
    <>
      <h2 style={{ color: "cadetblue" }}>{restaurant.name}</h2>
      <Menu menu = {restaurant.menu} />
      <Reviews reviews = {restaurant.reviews} />
      {isAuthorized ? <ReviewForm /> : null}
    </>
  );
};
