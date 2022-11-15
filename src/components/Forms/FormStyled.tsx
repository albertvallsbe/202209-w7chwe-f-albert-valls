import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  justify-content: center;

  .form {
    &__item {
      background-color: ${mainStyleColors.secondaryLightBlue};
      border-radius: 10px;
      border: 1px solid ${mainStyleColors.secondaryBlue};
      padding: 0.5rem 0.7rem;

      :hover {
        background-color: ${mainStyleColors.secondaryLightBlueHover};
      }
    }
    &__label {
      font-weight: 600;
    }
    &__container {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    &__group {
      display: flex;
      flex-direction: column;
      padding-top: 0.7rem;
    }
  }
  .button {
    margin-top: 2rem;
    width: 100%;
  }
  p {
    margin-top: 0.5rem;
    text-align: center;
    text-decoration: none;
    font-size: ${mainStyleFonts.mainSmallFontSize};
  }
`;

export default FormStyled;
