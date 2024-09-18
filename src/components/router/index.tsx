import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
