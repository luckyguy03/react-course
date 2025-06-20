import { createAsyncThunk } from "@reduxjs/toolkit";

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
        !state.dishesSlice.ids.find(element => element === dishId)
      );
    },
  }
);