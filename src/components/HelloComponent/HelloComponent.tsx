import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FormStyled from "../Forms/FormStyled";
import LogoComponent from "../LogoComponent/LogoComponent";

const HelloComponent = (): JSX.Element => {
  return (
    <FormStyled>
      <div className="form__container">
        <LogoComponent />
        <div className="form__block">
          <Link to="/users/register">
            <Button action={() => {}} text="Register" />
          </Link>
          <Link to="/users/login">
            <Button action={() => {}} text="Login" />
          </Link>
        </div>
      </div>
    </FormStyled>
  );
};

export default HelloComponent;
