import { NavLinkWrapper } from "../../../nav-link-wrapper/nav-link-wrapper";

export const RestaurantTab = ({ restaurant }) => {
  const label = restaurant.name;
  return <NavLinkWrapper path={restaurant.id} label={label} />;
};
