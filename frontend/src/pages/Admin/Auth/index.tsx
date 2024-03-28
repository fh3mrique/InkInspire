import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./styles.css";
import AuthImg from "../../../assets/img/tatuadorAuthImg.jpg";

const Auth = () => {
  return (
    <div className="auth-container row">
      <div className="auth-banner-container col-xl-3">
        <img src={AuthImg} />
      </div>
      <div className="auth-form-container col-xl-4">
        <Routes>
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<h1>Card signup</h1>} />
          <Route path="recovery" element={<h1>Card recovery</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
