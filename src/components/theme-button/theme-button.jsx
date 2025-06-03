import { useContext } from "react";
import { ThemeContext } from "../theme-context-provider/index";

import styles from '../layout/layout.module.css'

export const ThemeButton = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return <button className={styles.themeButton} onClick={handleClick}>toggle theme</button>;
};