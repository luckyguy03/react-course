import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById, selectRequestStatus } from "./slice";
import { REQUEST_STATUS } from "../../../constants/request-status";

export const getDish = createAsyncThunk("dish/getDish",
  async (dishId, { rejectWithValue }) => {

    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    if (!response.ok) {
      return rejectWithValue(response.statusText);
    }
    const result = await response.json();
   
    return result;
  },
  {
    condition: (dishId, { getState }) => {
      const state = getState();
     
      return (
        !selectDishById(state, dishId) ||
        selectRequestStatus(state) === REQUEST_STATUS.IDLE
      );
    },
  }
);