import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";
import { ReviewForm } from "../../../review-form/review-form";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { Outlet, useParams } from "react-router";
import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper"; 

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
        <NavLinkWrapper path="menu" label={"Меню"}/>
        <NavLinkWrapper path="reviews" label={"Отзывы"}/>
      </div>
      <Outlet />
      {isAuthorized ? <ReviewForm /> : null}
    </>
  );
};
