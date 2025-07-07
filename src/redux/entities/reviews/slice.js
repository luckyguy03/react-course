import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";
import { REQUEST_STATUS } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload);
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = REQUEST_STATUS.REJECTED;
      }),
});

const selectReviewsSlice = (state) => state[reviewsSlice.name];

export const { selectIds: selectReviewIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);

export const { selectRequestStatus } = reviewsSlice.selectors;
