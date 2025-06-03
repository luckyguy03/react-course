import { Button } from "../button/button";

import styles from "./counter.module.css";

export const Counter = ({count, onDecrement, onIncrement, decrementEnable, incrementEnable}) => {
  return (
    <div className={styles.container}>
      <div><Button onClick={onDecrement} title={"-"} size="400" disabled={!decrementEnable}/></div>
      <div className={styles.counter}>{count}</div>
      <div><Button onClick={onIncrement} title={"+"} size="400" disabled={!incrementEnable}/></div>
    </div>
  );
};