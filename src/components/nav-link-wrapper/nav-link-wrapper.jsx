import { NavLink } from "react-router";

import styles from "./nav-link-wrapper.module.css";

export const NavLinkWrapper = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? styles.activeTab : styles.notActiveTab
      }
    >
      {label}
    </NavLink>
  );
};
