import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";

import { Dish } from "./dish";

export const Menu = () => {

  const { restaurantId } = useParams();
  const restaurant = useSelector(state =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <>
      <h3 style={{ color: "ButtonText" }}>Меню:</h3>
      <ul>
        {restaurant.menu.map((id) => (
          <li style={{ listStyleType: "none", color: "green" }} key={id}>
            <Dish dishId={id} isLink />
          </li>
        ))}
      </ul>
    </>
  );
};
