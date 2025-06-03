import { useState } from "react";

export const useCount = (min, max) => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count < max) setCount(count + 1);
  };
  const incrementEnabled = count < max;
  const decrementEnabled = count > min;

  const onDecrement = () => {
    if (count > min) setCount(count - 1);
  };

  return {
    count,
    onIncrement,
    onDecrement,
    incrementEnabled,
    decrementEnabled,
  };
};
