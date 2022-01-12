import { configureStore } from "@reduxjs/toolkit";
import messengerPreviewReducer from "slice/messengerPreviewSlice";
import userReducer from "slice/userSlice";

const store = configureStore({
  reducer:{
    user: userReducer,
    messengerPreview: messengerPreviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
      },
    }),
});

export default store;
