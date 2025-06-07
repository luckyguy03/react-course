import { useCount } from "./use-count";
import { Counter } from "./counter";
import { DISH_COUNTER_MAX, DISH_COUNTER_MIN } from "../../constants/constants";

export const DishCounter = ({ dishId }) => {
  const {
    amount,
    onIncrement,
    onDecrement,
    incrementEnabled,
    decrementEnabled,
  } = useCount(DISH_COUNTER_MIN, DISH_COUNTER_MAX, dishId);
  return (
    <Counter
      count={amount}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      incrementEnable={incrementEnabled}
      decrementEnable={decrementEnabled}
    />
  );
};
