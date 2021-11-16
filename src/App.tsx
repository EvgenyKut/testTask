import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const test = localStorage.getItem("token");

    test && setToken(test);
  }, [token]);

  return (
    <div className="App">
      {!token ? (
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Redirect to={"/login"} />
        </Switch>
      ) : (
        <Switch>
          <Route path={"/page"}>
            <Dashboard />
          </Route>
          <Redirect to={"/page"} />
        </Switch>
      )}
    </div>
  );
}

export default App;
