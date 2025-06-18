import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishes, getDish } from "./get-dish";
import { REQUEST_STATUS } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState({ requestStatus: REQUEST_STATUS.IDLE }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending || getDish.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
      })
      .addCase(getDishes.rejected || getDish.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.REJECTED;
      }),
});

const selectDishesSlice = (state) => state[dishesSlice.name];

export const {
  selectIds: selectDishIds,
  selectById: selectDishById,
} = entityAdapter.getSelectors(selectDishesSlice);

export const { selectRequestStatus } = dishesSlice.selectors
