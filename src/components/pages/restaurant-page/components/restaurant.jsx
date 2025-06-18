import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurant/slice";
import { ReviewForm } from "../../../review-form/review-form";
import { UserContext } from "../../../user-context-provider";
import { useContext } from "react";
import { Outlet, useParams } from "react-router";
import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper"; 
import { getRestaurant } from "../../../../redux/entities/restaurant/get-restaurants";
import { useRequest } from "../../../../redux/hooks/use-request";
import { REQUEST_STATUS } from "../../../../constants/request-status";

import styles from "../restaurant-page.module.css";

export const Restaurant = () => {
  const {
    auth: { isAuthorized },
  } = useContext(UserContext);
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};
  const requestStatus = useRequest(getRestaurant, restaurantId);
  
  if (requestStatus === REQUEST_STATUS.PENDING) {
    return "Loading...";
  }

  if (requestStatus === REQUEST_STATUS.REJECTED) {
    return "error";
  }

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
