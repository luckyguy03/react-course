import { DishCounter } from "../../../counter/dish-counter";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../../redux/entities/dishes/slice";
//import { NavLink } from "react-router";
import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper";

import styles from "../../restaurant-page/restaurant-page.module.css";

export const Dish = ({ dishId, isLink }) => {
  
  const {
    auth: { isAuthorized },
  } = useContext(UserContext);

  const dish = useSelector((state) => selectDishById(state, dishId) || {});

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
