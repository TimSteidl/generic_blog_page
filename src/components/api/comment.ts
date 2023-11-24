import axios from "axios";

const BASE_API = "http://localhost:8082/";
export const submitComment = async (
  blogId: number,
  content: string,
  authorId: number | undefined,
) => {
  return await axios
    .post(BASE_API, {
      blogId: blogId,
      content: content,
      authorId: authorId,
    })
    .then((response) => {
      return response.data;
    });
};
