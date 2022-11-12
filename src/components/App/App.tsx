import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../HomePage/HomePage";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
