import { Link } from "react-router-dom";
import LogoStyled from "../LogoComponent/LogoStyled";

const LogoComponent = (): JSX.Element => {
  return (
    <LogoStyled>
      <div className="logo__container">
        <Link to={"/"}>
          <img src="/assets/images/cavall.png" alt="Logo" />
        </Link>
      </div>
    </LogoStyled>
  );
};

export default LogoComponent;
