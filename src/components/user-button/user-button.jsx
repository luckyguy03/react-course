import { useContext } from "react";
import { UserContext } from "../user-context-provider/index";

import styles from "../layout/layout.module.css";

export const UserButton = () => {
  const { userName, setUser, isAuthorized } = useContext(UserContext);

  const handleClick = () => {
    setUser((current) => (current === "" ? "Andrey" : ""));
  };

  return (
    <div>
      {!isAuthorized ? (
        <button className={styles.themeButton} onClick={handleClick}>
          Войти
        </button>
      ) : (
        <>
          <span>Вы вошли: {userName}</span>
          <button className={styles.themeButton} onClick={handleClick}>
            Выйти
          </button>
        </>
      )}
    </div>
  );
};
