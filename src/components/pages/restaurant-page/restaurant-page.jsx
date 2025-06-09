import { RestaurantTab } from "./components/restaurant-tab";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../../redux/entities/restaurant/slice";
import { Outlet } from "react-router";

import styles from "./restaurant-page.module.css";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={styles.restaurantPageContainer}>
      <div className={styles.restaurantPage}>
        {restaurantIds.map((id) => (
          <RestaurantTab
            key={id}
            restaurantId={id}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
