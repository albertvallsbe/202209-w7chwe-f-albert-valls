import styled from "styled-components";

const AppStyled = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.mainBlack};
  min-height: 100vh;
  width: 100%;
  padding: 0 2rem;
  color: ${(props) => props.theme.mainWhite};
`;

export default AppStyled;
