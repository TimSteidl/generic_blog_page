import axios from "axios";
import { User } from "@/model.ts";

const BASE_API = "http://localhost:8081/";

export const loginUser = async (username: string, password: string) => {
  return await axios
    .post(BASE_API + "login", {
      username: username,
      password: password,
    })
    .then((response) => {
      return response.data as User;
    });
};

export const registerUser = async (username: string, password: string) => {
  return await axios
    .post(BASE_API + "register", {
      username: username,
      password: password,
    })
    .then((response) => {
      return response.data as User;
    });
};
