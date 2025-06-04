import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {})
};

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  }
});

export const { selectDishById  } =
  dishesSlice.selectors;