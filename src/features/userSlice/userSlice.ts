import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "../../types/types";

const initialUsersState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUsersState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>): UserState => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (previousUser): UserState => ({
      ...initialUsersState,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
