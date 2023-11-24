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
      if (response.status == 200) {
        return response.data as User;
      }
    })
    .catch(() => {
      console.log("Error logging in. Wrong password or Account doesn't exist");
    });
};

export const registerUser = async (username: string, password: string) => {
  return await axios
    .post(BASE_API + "register", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.status == 201) {
        return response.data as User;
      }
    })
    .catch(() => {
      console.log("Error registering. User already exists.");
    });
};
