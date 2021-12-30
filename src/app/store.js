import { configureStore } from "@reduxjs/toolkit";
import userSlice from "slice/userSlice";

const store = configureStore({
  reducer: userSlice,
});

export default store;
