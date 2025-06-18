import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";
import { REQUEST_STATUS } from "../../../constants/request-status";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: entityAdapter.getInitialState({ requestStatus: REQUEST_STATUS.IDLE }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = REQUEST_STATUS.REJECTED;
      }),
});

const selectUsersSlice = (state) => state[usersSlice.name];

export const {
  selectIds: selectUserIds,
  selectById: selectUserById,
} = entityAdapter.getSelectors(selectUsersSlice);

export const { selectRequestStatus } = usersSlice.selectors

/*
export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = usersSlice.selectors;
*/
