import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/slices/userSlice.ts";
import { blogReducer } from "@/slices/blogSlice.ts";
import { commentReducer } from "@/slices/commentSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
    comments: commentReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
