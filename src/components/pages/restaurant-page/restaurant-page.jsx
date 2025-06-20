import { RestaurantTab } from "./components/restaurant-tab";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../../redux/entities/restaurant/slice";
import { Outlet } from "react-router";
import { getRestaurants } from "../../../redux/entities/restaurant/get-restaurants";
import { useRequest } from "../../../redux/hooks/use-request";
import { REQUEST_STATUS } from "../../../constants/request-status";

import styles from "./restaurant-page.module.css";

export const RestaurantPage = () => {

  const restaurantIds = useSelector(selectRestaurantIds);
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUS.PENDING || !restaurantIds.length) {
    return "Loading...";
  }

  if (requestStatus === REQUEST_STATUS.REJECTED) {
    return "error";
  }

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
