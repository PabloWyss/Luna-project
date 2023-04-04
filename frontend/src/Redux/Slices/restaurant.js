import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: {},
  },
  reducers: {
    updateRestaurantData: (state, action) => {
      state.userData = action.payload;
    }
  }
})

export const { updateRestaurantData } = restaurantSlice.actions;
export default restaurantSlice.reducer;