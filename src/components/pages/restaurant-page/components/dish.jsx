import { DishCounter } from "../../../counter/dish-counter";

export const Dish = ({ dish }) => {
    return (
        <div className="dish-container"> 
            <div className="dish-description">{dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ( {dish.ingredients.join(", ")} )</div> 
            <div className="dish-counter"><DishCounter/></div>
        </div>
    );
};