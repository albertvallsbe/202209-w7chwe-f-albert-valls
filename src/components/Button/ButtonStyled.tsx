import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.mainLightGreen};
  color: ${(props) => props.theme.mainBlack};
  border: none;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  min-height: 3rem;
  padding: 0 1rem;
`;

export default ButtonStyled;
