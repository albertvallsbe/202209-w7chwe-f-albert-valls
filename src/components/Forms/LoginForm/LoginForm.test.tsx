import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import { Provider } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";

describe("Given the login form component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an inputs for name and password and a 'Login' button", () => {
      const expectedUsername = "username";
      const expectedPassword = "Password";
      const expectedButton = "Login";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText(expectedUsername);
      const passwordInput = screen.getByLabelText(expectedPassword);
      const button = screen.queryByRole("button", { name: expectedButton });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
