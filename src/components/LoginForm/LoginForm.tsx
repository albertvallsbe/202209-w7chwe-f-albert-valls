import { useState } from "react";
import useUser from "../../hooks/useUser";
import { UserCredentials } from "../../types/types";
import Button from "../Button/Button";
import { LoginFormStyled } from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { login } = useUser();

  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const user: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };
    login(user);
  };

  return (
    <>
      <LoginFormStyled onSubmit={handleSubmit}>
        <div className="form__block">
          <div className="form__group">
            <label className="form__label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="username"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <Button action={() => {}} text="Login" />
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;