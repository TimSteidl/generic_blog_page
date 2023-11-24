import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "@/model.ts";
import { useAppSelector } from "@/store/reduxHooks.ts";

export type CommentSliceState = {
  currentComment: Comment;
  comments: Comment[];
};

export const initialState: CommentSliceState = {
  comments: [],
  currentComment: {} as Comment,
};

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    setCurrentComment: (state, action: PayloadAction<Comment>) => {
      state.currentComment = action.payload;
    },
  },
});

export const { setCurrentComment, setComments } = CommentSlice.actions;

export const commentReducer = CommentSlice.reducer;

export const useCommentSelector = () =>
  useAppSelector((state) => state.comments);
