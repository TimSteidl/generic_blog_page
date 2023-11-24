import { User } from "@/model.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "@/store/reduxHooks.ts";

export type UserSliceState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};
export const initialState: UserSliceState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLoggedOut: (state) => {
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError, setLoggedOut } =
  userSlice.actions;

export const userReducer = userSlice.reducer;

export const useUserSelector = () => useAppSelector((state) => state.user);
