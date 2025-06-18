import { useParams } from "react-router";
import { Dish } from "../../../components/pages/restaurant-page/components/dish";
import { useRequest } from "../../../redux/hooks/use-request";
import { getDish } from "../../../redux/entities/dishes/get-dish";
import { useSelector } from "react-redux";
import { REQUEST_STATUS } from "../../../constants/request-status";

export const DishPage = () => {
  const { dishId } = useParams();

  const dishIds = useSelector((state) => state.dishesSlice.ids);
  const requestStatus = useRequest(getDish, dishId);

  if (requestStatus === REQUEST_STATUS.PENDING || Object.keys(dishIds).length === 0) {
    return "Loading...";
  }

  if (requestStatus === REQUEST_STATUS.REJECTED) {
    return "error";
  }


  return (<Dish dishId={dishId} />);
};

