import { useParams } from "react-router";
import { useGetRestaurantsQuery, useGetDishesQuery } from "../../../../redux/api/index";

import { Dish } from "./dish";

export const Menu = () => {
  const { restaurantId } = useParams();
   
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === restaurantId),
    }),
  });

  const { data, isLoading, isError } = useGetDishesQuery();

  if (isLoading || !data.length) {
    return "Loading...";
  }

  if (isError) {
    return "error";
  }

  return (
    <>
      <h3 style={{ color: "ButtonText" }}>Меню:</h3>
      <ul>
        {restaurant.menu.map((id) => (
          <li style={{ listStyleType: "none", color: "green" }} key={id}>
            <Dish dishId={id} isLink />
          </li>
        ))}
      </ul>
    </>
  );
};
