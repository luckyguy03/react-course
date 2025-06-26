import { RestaurantTab } from "./components/restaurant-tab";
import { Outlet } from "react-router";
import { useGetRestaurantsQuery } from "../../../redux/api/index";

import styles from "./restaurant-page.module.css";

export const RestaurantsPage = () => {

  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading || !data.length) {
    return "Loading...";
  }

  if (isError) {
    return "error";
  }

  return (
    <div className={styles.restaurantPageContainer}>
      <div className={styles.restaurantPage}>
        {data.map((restaurant) => (
          <RestaurantTab
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
