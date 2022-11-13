import axios from "axios";
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
} from "../types/types";
import decodeToken from "jwt-decode";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL_LOCAL!;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = async (user: UserCredentials) => {
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

  const logout = () => {
    try {
      localStorage.setItem("token", "");
      dispatch(logoutUserActionCreator());
      navigate("/");
    } catch {}
  };
  return { login, logout };
};

export default useUser;
