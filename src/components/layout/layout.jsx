import { ProgressBar } from "../progress-bar/progress-bar";

import styles from "./layout.module.css";

export const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav></nav>
        <h1>Заказ еды</h1>
      </header>
      {children}
      <footer className={styles.footer}>Будет вкусно!!!</footer>
      <ProgressBar />
    </div>
  );
};
