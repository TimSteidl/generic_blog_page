import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "@/components/api/user.ts";
import { useAppDispatch } from "@/store/reduxHooks.ts";
import { setLoggedOut, setUser, useUserSelector } from "@/slices/userSlice.ts";
import { useEffect } from "react";

export const useSession = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useUserSelector();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, []);
  const login = (username: string, passoword: string) => {
    loginUser(username, passoword).then((r) => dispatch(setUser(r)));
    if (user != null) {
      navigate("/blogs");
    }
  };
  const logout = () => {
    dispatch(setLoggedOut());
  };

  const register = async (username: string, password: string) => {
    registerUser(username, password).then((user) => dispatch(setUser(user)));

    if (user != null) {
      navigate("/blogs");
    }
  };

  return { login, logout, register };
};
