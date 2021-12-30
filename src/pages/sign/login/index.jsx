import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import firebaseClient from "config/firebase";

function Login() {
  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error handler
  const [errorMessage, setErrorMessage] = useState("");

  // reset value 
  const resetErrorValue = () => {
    setErrorMessage("");
  }

  // login
  const handleClickLoginButton = () => {
    resetErrorValue();

    firebaseClient
      .signInWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch((err) => setErrorMessage(err));
  };

  return (
    <>
      <div className="sign__item">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="sign__item">
        <label htmlFor="password">Mật khẩu:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form__actions">
        <Button
          onClick={handleClickLoginButton}
          sx={{ mr: 2 }}
          variant="contained"
        >
          Đăng nhập
        </Button>
        <Link to="/register">
          <Button variant="outlined">Đăng ký</Button>
        </Link>
      </div>
      {
        errorMessage && <Alert severity="error">{errorMessage}</Alert>
      }

    </>
  );
}

export default Login;
