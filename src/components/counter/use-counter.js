import { useState } from "react";
import { DISH_COUNTER_MAX, DISH_COUNTER_MIN } from "../../constants/constants";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if(count < DISH_COUNTER_MAX)
      setCount(count + 1);
  }
  const onDecrement = () => {
    if(count > DISH_COUNTER_MIN)
      setCount(count - 1);
  }

  return {
    count,
    onIncrement,
    onDecrement,
  };
};
