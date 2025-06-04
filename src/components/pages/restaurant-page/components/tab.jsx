import { Button } from "../../../button/button";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";

import styles from "../restaurant-page.module.css";

export const Tab = ({restaurantId, onClick, isActive }) => {
  const label = useSelector((state) => selectRestaurantById(state, restaurantId)).name || {};
  return (
    <Button
      className={isActive ? styles.activeTab : styles.notActiveTab}
      onClick={onClick}
      title={<b>{label}</b>}
    />
  );
};
