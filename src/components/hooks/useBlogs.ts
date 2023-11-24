import { useEffect } from "react";
import { getAllBlogs } from "@/components/api/blog.ts";
import { useAppDispatch } from "@/store/reduxHooks.ts";
import { setBlogs } from "@/slices/blogSlice.ts";

export const useBlogs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getAllBlogs().then((blogs) => {
      dispatch(setBlogs(blogs));
      console.log({ blogs });
    });
  }, []);
};
