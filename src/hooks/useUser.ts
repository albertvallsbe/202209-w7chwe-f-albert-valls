import axios from "axios";
import decodeToken from "jwt-decode";
import { useAppDispatch } from "../redux/hooks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../redux/features/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import {
  CustomTokenPayload,
  LoginResponse,
  User,
  UserCredentials,
  UserRegisterCredentials,
} from "../types/types";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL_LOCAL!;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerUser = async (userData: UserRegisterCredentials) => {
    await axios.post(`${url}users/register`, {
      username: userData.username,
      password: userData.password,
      email: userData.email,
    });

    return true;
  };

  const logIn = async (user: UserCredentials) => {
    try {
      const login = await axios.post<LoginResponse>(`${url}users/login`, {
        username: user.username,
        password: user.password,
      });

      const { token } = login.data;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const loggedUser: User = {
        ...tokenPayload,
        token,
      };
      dispatch(loginUserActionCreator(loggedUser));
      localStorage.setItem("token", token);
      return true;
    } catch {}
  };

  const logOut = () => {
    try {
      localStorage.setItem("token", "");
      dispatch(logoutUserActionCreator());
      navigate("/");
    } catch {}
  };
  return { registerUser, logIn, logOut };
};

export default useUser;
