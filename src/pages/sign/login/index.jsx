import { Alert, Button } from "@mui/material";
import firebaseClient from "config/firebase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserInformation } from "slice/userSlice";
import { updateOnlineUser } from "utils/updateOnlineUser";
import { setUserCustomInformation } from "utils/userCredential";

function Login() {
  const dispatch = useDispatch();

  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error handler
  const [errorMessage, setErrorMessage] = useState("");

  // reset value
  const resetErrorValue = () => {
    setErrorMessage("");
  };

  // login
  const handleClickLoginButton = () => {
    resetErrorValue();

    firebaseClient
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        let userCustom = setUserCustomInformation(user);

        dispatch(setUserInformation(userCustom));
        updateOnlineUser(userCustom.uid);
      })
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
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </>
  );
}

export default Login;
