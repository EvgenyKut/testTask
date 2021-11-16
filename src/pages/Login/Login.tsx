import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { loginFunction } from "../../api";
import "./login.css";
import { State } from "./types";

const reducer = (state: State, newState: Partial<State>) => ({
  ...state,
  ...newState,
});
const Login: React.FC = () => {
  const [state, setState] = useReducer<typeof reducer>(reducer, {
    email: "",
    password: "",
    error: "",
    loading: false,
  });

  useEffect(() => {
    const timer = setTimeout(function () {
      setState({ error: "" });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.error]);

  const onLoginClick = async () => {
    setState({ loading: true });
    const result = await loginFunction(state.email, state.password);
    const data = result && JSON.parse(result);
    if (data.error) {
      setState({ error: data.error });
    } else {
      result && localStorage.setItem("token", data.token);
      localStorage.setItem("user", state.email);
      window.location.assign("/page");
    }
    setState({ loading: false });
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className={"login-email-style"}>
            <TextField
              label="e-mail"
              value={state.email}
              onChange={(e) => setState({ email: e.target.value })}
              className={"login-field"}
            />
          </div>
          <TextField
            label="password"
            value={state.password}
            onChange={(e) => setState({ password: e.target.value })}
            className={"login-field"}
          />
          <div className={"login-btn"}>
            <Button onClick={onLoginClick} disabled={state.loading}>
              Log in
            </Button>
          </div>
        </div>

        {state.error && (
          <div className={"login-error-alert"}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong>{state.error}</strong>
            </Alert>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
