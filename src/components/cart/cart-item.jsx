import { useGetDishesQuery } from "../../redux/api/index";

export const CartItem = ({id: dishId, amount}) => {

  const { data: dish } = useGetDishesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === dishId),
    }),
  });

  return (
    <span>{dish.name} - {amount}</span>
  )
}