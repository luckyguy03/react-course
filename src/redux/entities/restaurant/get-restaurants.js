import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds, selectRequestStatus } from "./slice";
import { REQUEST_STATUS } from "../../../constants/request-status";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Restaurants not found");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return (
        selectRestaurantIds(state).length === 0 ||
        selectRequestStatus(state) === REQUEST_STATUS.IDLE
      );
    },
  },
);

export const getRestaurant = createAsyncThunk(
  "restaurant/getRestaurant",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`,
    );
    if (!response.ok) {
      return rejectWithValue(response.statusText);
    }
    const result = await response.json();

    return result;
  },
  /* Возможный фильтр для повторного получения ресторана
  ,
  {
    condition: (id, { getState }) => {
      const state = getState();
      return (
        !selectRestaurantById(state, id) ||
        selectRequestStatus(state) === REQUEST_STATUS.IDLE
      );
    },
  }
  */
);
