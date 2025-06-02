import { useContext } from "react";
import { UserContext } from "../user-context-provider/index";

import styles from '../layout/layout.module.css'

export const UserButton = () => {
  const { userName, setUser } = useContext(UserContext);
  
  const handleInputClick = () => {
    setUser((current) => (current === "" ? "Andrey" : ""));
  }

  const handleOutputClick = () => {
    setUser((current) => (current === "" ? "Andrey" : ""));
  }

  return (
    <div>
      {userName === "" ? <button className={styles.themeButton} onClick={handleInputClick}>Войти</button> :  
      <>
        <span>Вы вошли: {userName}</span>
        <button className={styles.themeButton} onClick={handleOutputClick}>Выйти</button>
      </>}
    </div>
  );
};