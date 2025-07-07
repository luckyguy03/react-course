import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRequestStatus, selectUserIds } from "./slice";
import { REQUEST_STATUS } from "../../../constants/request-status";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users");
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Users not found");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return (
        selectUserIds(state).length === 0 ||
        selectRequestStatus(state) === REQUEST_STATUS.IDLE
      );
    },
  },
);
