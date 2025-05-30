import { DishCounter } from "../../../counter/dish-counter";

import styles from '../../restaurant-page/restaurant-page.module.css';

export const Dish = ({ dish }) => {
    return (
        <div className={styles.dishContainer}> 
            <div className={styles.dishDescription}>{dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ( {dish.ingredients.join(", ")} )</div> 
            <div className={styles.dishCounter}><DishCounter/></div>
        </div>
    );
};