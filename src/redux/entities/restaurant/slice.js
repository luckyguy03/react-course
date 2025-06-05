import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";

const initialState = {
  // Это массив идентификаторов ресторанов, которые будут отображаться на главной странице.
  // В данном случае, он содержит идентификаторы всех ресторанов из объекта normalizedRestaurants.
  ids: normalizedRestaurants.map(({ id }) => id),
  // Это объект, который содержит сущности ресторанов, где ключами являются идентификаторы ресторанов,
  // а значениями - объекты ресторанов.
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantsSlice.selectors;
