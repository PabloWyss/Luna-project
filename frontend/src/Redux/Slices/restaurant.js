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
      website: 'www.laderach.com',
      phone: '044 210 11 60',
      email: 'No email',
      opening_hours: 'Monday-Friday 9:00 am - 8:00 pm',
      price_range: '$$',
      image: '',
      created_by_user: '',
      reviews: [
        {
          id: 1,
          text_content: "Love this place",
          rating: 4,
          date_created: "03.04.2022 16:57",
          likes_on_review: 2,
          reviewed_by_user: 'Sam Smith',
        },
        {
          id: 2,
          text_content: "Too expensive",
          rating: 1,
          date_created: "03.04.2022 16:57",
          likes_on_review: 35,
          reviewed_by_user: 'Marta Bilbao',
        },
        {
          id: 3,
          text_content: "Amazing chocolate!!!",
          rating: 4,
          date_created: "03.04.2022 16:57",
          likes_on_review: 10,
          reviewed_by_user: 'Pablo Wyss',
        },
        {
          id: 4,
          text_content: "Will definetely go back to try more chocolates",
          rating: 3,
          date_created: "03.04.2022 16:57",
          likes_on_review: 5,
          reviewed_by_user: 'Javier Ruiz',
        },
      ]
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