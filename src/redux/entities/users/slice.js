import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {})
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  }
});

export const { selectUserById } =
  usersSlice.selectors;