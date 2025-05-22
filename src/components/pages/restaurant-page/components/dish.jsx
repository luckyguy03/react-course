import { Counter } from "../../../counter/counter";

export const Dish = ({ dish }) => {
    return (
        <div className="dish-container"> 
            <div className="dish-description">{dish.name} - <span style={{ color: "black" }}>{dish.price}$</span> ( {dish.ingredients.join(", ")} )</div> 
            <div className="dish-counter"><Counter/></div>
        </div>
    );
};