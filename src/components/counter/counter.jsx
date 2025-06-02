import { Button } from "../button/button";

export const Counter = ({count, onDecrement, onIncrement}) => {
  return (
    <div>
      <Button onClick={onDecrement} title={"-"} size="400"/>
      {count}
      <Button onClick={onIncrement} title={"+"} size="400"/>
    </div>
  );
};