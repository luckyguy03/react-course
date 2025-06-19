import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";
import { UserButton } from "../user-button/user-button";
import { Cart } from "../cart/cart"
import { Outlet, NavLink } from "react-router";

import styles from "./layout.module.css";

export const Layout = () => {

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav><NavLink to="/">Главная страница</NavLink></nav>
        <h1>Заказ еды</h1>
        <ThemeButton />
        <UserButton />
      </header>
      <Outlet />
      <Cart />
      <footer className={styles.footer}>Будет вкусно!!!</footer>
      <ProgressBar />
    </div>
  );
};
