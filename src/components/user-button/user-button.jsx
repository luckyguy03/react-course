import { useContext } from "react";
import { UserContext } from "../user-context-provider/index";

import styles from "../layout/layout.module.css";

export const UserButton = () => {
  const {
    auth: { name, isAuthorized },
    toggleAuth,
  } = useContext(UserContext);

  const handleClick = () => {
    toggleAuth();
  };

  return (
    <div>
      {!isAuthorized ? (
        <button className={styles.themeButton} onClick={handleClick}>
          Войти
        </button>
      ) : (
        <>
          <span>Вы вошли: {name}</span>
          <button className={styles.themeButton} onClick={handleClick}>
            Выйти
          </button>
        </>
      )}
    </div>
  );
};
