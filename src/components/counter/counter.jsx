import { useContext } from "react";
import { ThemeContext } from "../theme-context-provider/index";
import { Button } from "../button/button";

export const Counter = ({count, onDecrement, onIncrement}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Button onClick={onDecrement} title={"-"} size="400"/>
      {count}
      <Button onClick={onIncrement} title={"+"} size="400"/>
    </div>
  );
};