import { Blog } from "@/model.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "@/store/reduxHooks.ts";

export type BlogSliceState = {
  currentBlog: Blog;
  blogs: Blog[];
};

export const initialState: BlogSliceState = {
  blogs: [],
  currentBlog: {} as Blog,
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setCurrentBlog: (state, action: PayloadAction<Blog>) => {
      state.currentBlog = action.payload;
    },
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { setCurrentBlog, setBlogs, addBlog } = BlogSlice.actions;

export const blogReducer = BlogSlice.reducer;

export const useBlogSelector = () => useAppSelector((state) => state.blogs);
