import { selectDishById } from "../../redux/entities/dishes/slice";
import { useSelector } from "react-redux";

export const CartItem = ({id, amount}) => {
  const dish = useSelector(state => selectDishById(state, id));
  return (
    <span>{dish.name} - {amount}</span>
  )
}