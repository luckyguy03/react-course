import { DishCounter } from "../../../counter/dish-counter";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Dish = ({ dish, isLink }) => {
  const {
    auth: { isAuthorized },
  } = useContext(UserContext);

  return (
    <div className={styles.container}>
      {isLink ? (
        <div className={styles.dishDescription}>
          <NavLinkWrapper
            path={"/dish/" + dish.id}
            label={dish.name + " - " + dish.price + "$"}
          />
        </div>
      ) : (
        <div className={styles.dishDescription}>
          {dish.name} - <span className={styles.dishPrice}>{dish.price}$</span>{" "}
          ({" Ingredients: "}
          {dish.ingredients.join(", ")} )
        </div>
      )}
      {isAuthorized ? (
        <div className={styles.dishCounter}>
          <DishCounter dishId={dish.id} />
        </div>
      ) : null}
    </div>
  );
};
