import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const ButtonStyled = styled.button`
  background-color: ${mainStyleColors.mainBlue};
  color: ${mainStyleColors.mainWhite};
  border: none;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: ${mainStyleFonts.mainFont};
  font-weight: ${mainStyleFonts.boldFontWeight};
  min-height: 3rem;
  padding: 0 1rem;
  justify-content: center;

  :hover {
    background-color: ${mainStyleColors.mainBlueHover};
  }
`;

export default ButtonStyled;
