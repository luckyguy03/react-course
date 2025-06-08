import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";
import { NavLink } from "react-router";

import styles from "../restaurant-page.module.css";

  export const RestaurantTab = ({ restaurantId }) => {
  const label =  useSelector((state) => selectRestaurantById(state, restaurantId)).name ||
    {};
  return (
    <NavLink to={{pathname:`${restaurantId}/menu`}} className={({ isActive }) => isActive ? styles.activeTab : styles.notActiveTab}>
      {label}
    </NavLink>

  );
};
