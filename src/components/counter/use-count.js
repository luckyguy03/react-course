import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../redux/entities/cart/slice";

export const useCount = (min, max, dishId) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    selectItemAmountById(state, dishId)
  );

  const increment = useCallback(
    () => dispatch(addToCart(dishId)),
    [dispatch, dishId]
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dispatch, dishId]
  );

  const incrementEnabled = amount < max;
  const decrementEnabled = amount > min;

  return {
    amount,
    increment,
    decrement,
    incrementEnabled,
    decrementEnabled,
  };
};

/*
export const useCount = (headphoneId) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    selectItemAmountById(state, headphoneId)
  );
  const increment = useCallback(
    () => dispatch(addToCart(headphoneId)),
    [dispatch, headphoneId]
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(headphoneId)),
    [dispatch, headphoneId]
  );

  return {
    value: amount,
    increment,
    decrement,
  };
};
*/
