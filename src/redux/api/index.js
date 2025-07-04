import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getDishes: builder.query({
      query: () => "/dishes",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: "Reviews", id: "all" }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = api;
