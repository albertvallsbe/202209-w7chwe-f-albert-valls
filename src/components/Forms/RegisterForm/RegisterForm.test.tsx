import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";

import RegisterForm from "../RegisterForm/RegisterForm";

describe("Given the register form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an inputs for name and password and a 'Register' button", () => {
      const expectedUsername = "username";
      const expectedPassword = "Password";
      const expectedEmail = "Email";
      const expectedButton = "Register";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText(expectedUsername);
      const passwordInput = screen.getByLabelText(expectedPassword);
      const emailInput = screen.getByRole("textbox", { name: expectedEmail });
      const button = screen.queryByRole("button", { name: expectedButton });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
