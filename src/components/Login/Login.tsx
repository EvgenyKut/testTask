import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { login } from "../../api";
import "./login.css";
import { State } from "./types";

const reducer = (state: State, newState: Partial<State>) => ({
  ...state,
  ...newState,
});

type LoginProps = { onClick: () => void };
const Login: React.FC<LoginProps> = ({ onClick }) => {
  const [state, setState] = useReducer<typeof reducer>(reducer, {
    email: "",
    password: "",
    error: "",
    loading: false,
  });

  useEffect(() => {
    const errorModal = setTimeout(() => {
      setState({ error: "" });
    }, 3000);

    return () => {
      clearTimeout(errorModal);
    };
  }, [state.error]);

  const onLoginClick = async () => {
    setState({ loading: true });
    try {
      const result = await login({
        email: state.email,
        password: state.password,
      });
      if (result.error) {
        setState({ error: result.error });
      } else {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", state.email);
        onClick();
      }
    } catch (error) {
      setState({ error: "Something wrong! Please try later." });
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
              disabled={state.loading}
            />
          </div>
          <TextField
            label="password"
            value={state.password}
            onChange={(e) => setState({ password: e.target.value })}
            className={"login-field"}
            disabled={state.loading}
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
