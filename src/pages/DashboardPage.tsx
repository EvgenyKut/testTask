import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return <Dashboard user={user} onClick={Logout} />;
};

export default DashboardPage;
