import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { UserRegisterCredentials } from "../../../types/types";
import Button from "../../Button/Button";
import { FormStyled } from "../FormStyled";

const RegisterForm = (): JSX.Element => {
  const { registerUser, logIn } = useUser();
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    password: "",
    email: "",
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

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterCredentials = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    const isRegistered = await registerUser(formDataToSubmit);

    const login = await logIn({
      username: formData.username,
      password: formData.password,
    });

    if (isRegistered) {
      setTimeout(async () => {
        if (login) {
          navigate("/home");
        }
      }, 3000);
    }
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
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input
                className="form__item"
                placeholder="email"
                type="email"
                name="email"
                id="email"
                onChange={handleFormChange}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <Button action={() => {}} text="Register" />
          <p className="form__link">
            Registered? <a href="/login">Login now</a>
          </p>
        </div>
      </FormStyled>
    </>
  );
};

export default RegisterForm;
