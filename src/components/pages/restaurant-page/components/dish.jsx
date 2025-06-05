import { DishCounter } from "../../../counter/dish-counter";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../../redux/entities/dishes/slice";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Dish = ({ dishId }) => {
  const {
    auth: { isAuthorized },
  } = useContext(UserContext);
  const dish = useSelector((state) => selectDishById(state, dishId) || {});

  return (
    <div className={styles.container}>
      <div className={styles.dishDescription}>
        {dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ({" "}
        {dish.ingredients.join(", ")} )
      </div>
      {isAuthorized ? (
        <div className={styles.dishCounter}>
          <DishCounter />
        </div>
      ) : null}
    </div>
  );
};
