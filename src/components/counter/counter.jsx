import { useCount } from "./use-counter";

export const Counter = () => {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <div>
      <button onClick={onDecrement}>-</button>
      {count}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};
