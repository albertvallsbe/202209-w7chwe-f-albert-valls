import styled from "styled-components";

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form__label {
    font-weight: 800;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    padding-top: 0.7rem;

    input {
      background-color: ${(props) => props.theme.secondaryLightGreen};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.secondaryGreen};
      padding: 0.5rem 0.7rem;
    }

    textarea {
      background-color: ${(props) => props.theme.secondaryLightGreen};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.secondaryGreen};
      padding: 0.5rem 0.7rem 1.6rem 0.7rem;
    }

    select {
      background-color: ${(props) => props.theme.secondaryLightGreen};
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.secondaryGreen};
      padding: 0.5rem 0.7rem;
    }
  }
`;

export default LoginFormStyled;
