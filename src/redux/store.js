import { configureStore } from "@reduxjs/toolkit";
//import { restaurantsSlice } from "./entities/restaurant/slice";
//import { dishesSlice } from "./entities/dishes/slice";
//import { reviewsSlice } from "./entities/reviews/slice";
//import { usersSlice } from "./entities/users/slice";
import { cartSlice } from "./entities/cart/slice";
//import { requestSlice } from "./entities/request/slice";
import { api } from "./api/index";

export const store = configureStore({
  reducer: {
    //[restaurantsSlice.name]: restaurantsSlice.reducer,
    //[dishesSlice.name]: dishesSlice.reducer,
    //[reviewsSlice.name]: reviewsSlice.reducer,
    //[usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    //[requestSlice.name]: requestSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
  
});
