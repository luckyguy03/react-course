import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk("dishes/getDishes",
  async (restaurantId, { rejectWithValue}) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Dishes not found");
    }
    return result;
  }
);