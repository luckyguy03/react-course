import { DishCounter } from "../../../counter/dish-counter";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper";
import { useGetDishesQuery } from "../../../../redux/api/index";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Dish = ({ dishId, isLink }) => {
  
  const {
    auth: { isAuthorized },
  } = useContext(UserContext);

  const { data: dish } = useGetDishesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === dishId),
    }),
  });

  return (
    <div className={styles.container}>
      {isLink ? (
      <div className={styles.dishDescription}>
        <NavLinkWrapper path={"/dish/" + dish.id} label={dish.name + " - " + dish.price + '$'}/>
      </div>) : (
      <div className={styles.dishDescription}>
        {dish.name} - <span className={styles.dishPrice}>{dish.price}$</span> ({" Ingredients: "}{dish.ingredients.join(", ")} )
      </div>)
      }
      {isAuthorized ? (
        <div className={styles.dishCounter}>
          <DishCounter dishId={dishId}/>
        </div>
      ) : null}
    </div>
  );
};
