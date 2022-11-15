import FormStyled from "../FormStyled";
import { useState } from "react";
import useUser from "../../../hooks/useUser";
import { UserCredentials } from "../../../types/types";
import Button from "../../Button/Button";

const LoginForm = (): JSX.Element => {
  const { logIn } = useUser();

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
    logIn(user);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <div className="form__container">
          <div className="form__block">
            <div className="form__group">
              <label className="form__label" htmlFor="username">
                Username
              </label>
              <input
                className="form__item"
                placeholder="username"
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
                className="form__item"
                placeholder="password"
                type="password"
                name="password"
                id="password"
                onChange={handleFormChange}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div>
            <Button action={() => {}} text="Login" />
            <p className="form__link">
              Not a member? <a href="/register">Register now</a>
            </p>
          </div>
        </div>
      </FormStyled>
    </>
  );
};

export default LoginForm;
