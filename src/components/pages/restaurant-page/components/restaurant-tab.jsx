import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";

import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper";

export const RestaurantTab = ({ restaurantId }) => {
  const label =  useSelector((state) => selectRestaurantById(state, restaurantId)).name || {};
  return (
    <NavLinkWrapper path={restaurantId} label={label}/>
  );
};
