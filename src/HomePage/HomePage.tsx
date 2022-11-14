import LoginForm from "../components/Forms/LoginForm/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

const HomePage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default HomePage;
