import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;

  .form {
    padding: 0 10px 0 0;
    height: 25px;
  }

  .form__label {
    font-weight: 600;
  }
  .form__container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    padding-top: 0.7rem;

    input {
      background-color: ${(props) => props.theme.secondaryLightBlue};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.secondaryBlue};
      padding: 0.5rem 0.7rem;
    }

    textarea {
      background-color: ${(props) => props.theme.secondaryLightBlue};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.secondaryBlue};
      padding: 0.5rem 0.7rem 1.6rem 0.7rem;
    }

    select {
      background-color: ${(props) => props.theme.secondaryLightGreen};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.secondaryGreen};
      padding: 0.5rem 0.7rem;
    }
  }
  .button {
    margin: 1rem 2rem;
    width: 180px;
  }
  p {
    align-items: center;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    font-size: 0.7rem;
  }
`;

export default FormStyled;
