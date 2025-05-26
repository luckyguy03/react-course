import { useCount } from "./use-count";
import { Counter } from "./counter";
import { DISH_COUNTER_MAX, DISH_COUNTER_MIN } from "../../constants/constants";

export const DishCounter = () => {
    const { count, onIncrement, onDecrement } = useCount(DISH_COUNTER_MIN, DISH_COUNTER_MAX);
    return (
        <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
    )
}