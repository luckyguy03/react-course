import { ProgressBar } from "../progress-bar/progress-bar";

import styles from "./layout.module.css";

export const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <header style={{height: "100px"}}>
        <nav></nav>
        <h1>Заказ еды</h1>
      </header>
      {children}
      <footer style={{height: "100px"}}>Будет вкусно!!!</footer>
      <ProgressBar progress={window.scrollY} windowHeight={window.innerHeight} />
    </div>
  );
};
