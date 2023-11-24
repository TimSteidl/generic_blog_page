import axios from "axios";

const BASE_API = "http://localhost:8080/";

export const getAllBlogs = async () => {
  return await axios.get(BASE_API).then((response) => {
    return response.data;
  });
};

export const getBlog = async (id: string) => {
  return await axios.get(BASE_API + id).then((response) => {
    return response.data;
  });
};

export const createBlog = async (
  header: string,
  content: string,
  authorId: number,
) => {
  return await axios
    .post(BASE_API, {
      header: header,
      content: content,
      authorId: authorId,
    })
    .then((response) => {
      return response.data;
    });
};
