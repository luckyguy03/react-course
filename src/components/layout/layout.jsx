import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";
import { UserButton } from "../user-button/user-button";
import { Cart } from "../cart/cart"

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav></nav>
        <h1>Заказ еды</h1>
        <ThemeButton />
        <UserButton />
      </header>
      {children}
      <Cart />
      <footer className={styles.footer}>Будет вкусно!!!</footer>
      <ProgressBar />
    </div>
  );
};
