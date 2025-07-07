import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants, getRestaurant } from "./get-restaurants";
import { REQUEST_STATUS } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending || getRestaurant.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getRestaurants.rejected || getRestaurant.rejected, (state) => {
        state.requestStatus = REQUEST_STATUS.REJECTED;
      }),
});

const selectRestaurantSlice = (state) => state[restaurantsSlice.name];

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantSlice);

export const { selectRequestStatus } = restaurantsSlice.selectors;
