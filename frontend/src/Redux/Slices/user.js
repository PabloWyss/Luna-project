import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    updateUserData: (state, action) => {
      console.log("Hello")
      state.userData = action.payload;
      console.log(state.userData)
    }
  }
})

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;