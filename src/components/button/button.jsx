import classNames from "classnames";
import styles from "./button.module.css";
import { useContext } from "react";
import { ThemeContext } from "../theme-context-provider/index";

export const Button = ({
  title,
  onClick,
  disabled,
  size = "500",
  className,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.size500]: size === "500",
        [styles.size400]: size === "400",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
