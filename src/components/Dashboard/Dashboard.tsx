import React from "react";
import "./dashboard.css";

type DashboardProps = { user: string | null; onClick: () => void };
const Dashboard: React.FC<DashboardProps> = ({ user, onClick }) => {
  return (
    <div className={"dashboard-wrapper"}>
      <div className={"dashboard-header"}>
        <div className={"dashboard-header-block"}></div>
        <div className={"dashboard-header-block-text"}>
          <h5>Welcome,</h5> &nbsp;
          {user}
        </div>
        <button onClick={onClick}>Log out</button>
      </div>
      <div className={"dashboard-card"}>Welcome to our Awesome Dashboard!</div>
    </div>
  );
};

export default Dashboard;
