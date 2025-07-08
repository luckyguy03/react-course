import { useGetDishByIdQuery } from "../../redux/api/index";

export const CartItem = ({ id: dishId, amount }) => {
  const { data: dish, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "error";
  }

  return (
    <span>
      {dish.name} - {amount}
    </span>
  );
};
