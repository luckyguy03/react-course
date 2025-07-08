import { useParams } from "react-router";
import { useGetDishesByRestaurantIdQuery } from "../../../../redux/api/index";
import { Dish } from "./dish";

import styles from "../restaurant-page.module.css";

export const Menu = () => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "error";
  }

  return (
    <>
      <h3 className={styles.menuHeader}>Меню:</h3>
      <ul>
        {data.map((dish) => (
          <li className={styles.menuItem} key={dish.id}>
            <Dish dish={dish} isLink />
          </li>
        ))}
      </ul>
    </>
  );
};
