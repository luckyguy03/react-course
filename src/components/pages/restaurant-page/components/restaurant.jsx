import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";
import { ReviewForm } from "../../../review-form/review-form";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { Outlet, useParams, NavLink } from "react-router";

import styles from "../restaurant-page.module.css";

export const Restaurant = () => {
  const {
    auth: { isAuthorized },
  } = useContext(UserContext);
  const { restaurantId } = useParams();
  const restaurant =
    useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

  return (
    <>
      <h2 style={{ color: "cadetblue" }}>{restaurant.name}</h2>
      <div className={styles.innerTabs}>
        <div>
          <NavLink to="menu" className={({ isActive }) => isActive ? styles.activeTab : styles.notActiveTab}>
            Меню
          </NavLink>
        </div>
        <div>
          <NavLink to="reviews" className={({ isActive }) => isActive ? styles.activeTab : styles.notActiveTab}>
            Отзывы
          </NavLink>
      </div>
      </div>
      <Outlet />
      {isAuthorized ? <ReviewForm /> : null}
      
    </>
  );
};
