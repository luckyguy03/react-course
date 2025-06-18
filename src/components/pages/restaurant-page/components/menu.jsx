import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDishIds } from "../../../../redux/entities/dishes/slice";
import { useRequest } from "../../../../redux/hooks/use-request";
import { getDishes } from "../../../../redux/entities/dishes/get-dish";
import { REQUEST_STATUS } from "../../../../constants/request-status";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";

//import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";

import { Dish } from "./dish";

export const Menu = () => {
  const { restaurantId } = useParams();
  
  const dishIds = useSelector(selectDishIds);
  const requestStatus = useRequest(getDishes, restaurantId);
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

  if (requestStatus === REQUEST_STATUS.PENDING || !dishIds.length) {
    return "Loading...";
  }

  if (requestStatus === REQUEST_STATUS.REJECTED) {
    return "error";
  }

  return (
    <>
      <h3 style={{ color: "ButtonText" }}>Меню:</h3>
      <ul>
        {dishIds.filter(id => restaurant.menu.includes(id)).map((id) => (
          <li style={{ listStyleType: "none", color: "green" }} key={id}>
            <Dish dishId={id} isLink />
          </li>
        ))}
      </ul>
    </>
  );
};
