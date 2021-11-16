import React from "react";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const user = localStorage.getItem("user");

  const Logout = () => {
    localStorage.clear();
    window.location.assign("/login");
  };
  return (
    <div className={"dashboard-wrapper"}>
      <div className={"dashboard-header"}>
        <div className={"dashboard-header-block"}></div>
        <div className={"dashboard-header-block-text"}>
          <h5>Welcome,</h5> &nbsp;
          {user}
        </div>
        <button onClick={Logout}>Log out</button>
      </div>
      <div className={"dashboard-card"}>Welcome to our Awesome Dashboard!</div>
    </div>
  );
};

export default Dashboard;
