import { DishCounter } from "../../../counter/dish-counter";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";

import styles from '../../restaurant-page/restaurant-page.module.css';

export const Dish = ({ dish }) => {
    const { isAuthorized } = useContext(UserContext);
    return (
        <div className={styles.container}> 
            <div className={styles.dishDescription}>{dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ( {dish.ingredients.join(", ")} )</div> 
            { isAuthorized ? <div className={styles.dishCounter}><DishCounter/></div> : null}
        </div>
    );
};