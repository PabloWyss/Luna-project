import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/user.js'

export default configureStore({
  reducer: {
    user: userReducer,
  }
});