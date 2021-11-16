import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login";

const LoginPage = () => {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/page");
  };
  return <LoginForm onClick={goToPage} />;
};

export default LoginPage;
