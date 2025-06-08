import { useParams } from "react-router";
import { Dish } from "../../../components/pages/restaurant-page/components/dish";

export const DishPage = () => {
  const { dishId } = useParams();
  return (<Dish dishId={dishId} isLink={false} />);
};
