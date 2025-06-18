import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/request-status";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatus: (state, requestId) => state[requestId] || REQUEST_STATUS.IDLE,
    selectIsLoding: (state, requestId) => state[requestId] === REQUEST_STATUS.PENDING,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith(REQUEST_STATUS.PENDING),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(REQUEST_STATUS.FULFILLED),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(REQUEST_STATUS.REJECTED),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.REJECTED;
        }
      ),
});

export const { selectRequestStatus, selectIsLoding } = requestSlice.selectors;
