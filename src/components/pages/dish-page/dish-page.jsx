import { useParams } from "react-router";
import { Dish } from "../../../components/pages/restaurant-page/components/dish";
import { useRequest } from "../../../redux/hooks/use-request";
import { getDish } from "../../../redux/entities/dishes/get-dish";
import { useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../../constants/request-status";
import { selectDishById } from "../../../redux/entities/dishes/slice";

export const DishPage = () => {
  const { dishId } = useParams();

  const dish = useSelector((state) => selectDishById(state, dishId) || {});
  const requestStatus = useRequest(getDish, dishId);

  if (requestStatus === REQUEST_STATUS.PENDING || !dish) {
    return "Loading...";
  }

  if (requestStatus === REQUEST_STATUS.REJECTED) {
    return "error";
  }


  return (<Dish dishId={dishId} />);
};

