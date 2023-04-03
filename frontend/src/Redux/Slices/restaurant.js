import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: {
      id: 1,
      name: 'Läderach',
      category: 'Coffee & Pastries',
      street: 'Bahnhofstrasse 106',
      city: 'Zürich',
      zip_code: '8001',
      website: 'https://laderach.com',
      phone: '044 210 11 60',
      email: 'No email',
      opening_hours: '9:00 - 20:00',
      price_range: '$$',
      image: '',
      created_by_user: '',
      reviews: ''
    },
  },
  reducers: {
    updateRestaurantData: (state, action) => {
      state.userData = action.payload;
    }
  }
})

export const { updateRestaurantData } = restaurantSlice.actions;
export default restaurantSlice.reducer;