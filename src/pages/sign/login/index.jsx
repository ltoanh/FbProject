import GoogleIcon from "@mui/icons-material/Google";
import { Alert, Button, Chip } from "@mui/material";
import firebaseClient from "config/firebase";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUserInformation } from "slice/userSlice";
import { updateOnlineUser } from "utils/updateOnlineUser";
import { getUserCredentialStorage } from "utils/userCredential";
import "../sign-form.css";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error handler
  const [errorMessage, setErrorMessage] = useState("");

  // reset value
  const resetErrorValue = () => {
    setErrorMessage("");
  };

  // login with google
  const handleLoginWithGoogle = () => {
    resetErrorValue();

    firebaseClient
      .signInWithGoogle()
      .then((user) => {
        setUserCustomInformation(user);
      })
      .catch((err) => setErrorMessage(err));
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

  const setUserCustomInformation = (userCredential) => {
    const user = {
      name: userCredential.displayName,
      profileSrc: userCredential.photoURL,
      uid: userCredential.uid,
    };

    dispatch(setUserInformation(user));
    updateOnlineUser(user.uid);
    history.push("/");
  };

  //auto login if exist in local
  useEffect(() => {
    let userCredential = getUserCredentialStorage();
    if (userCredential) {
      setUserCustomInformation(userCredential);
    }
  }, []);

  return (
    <>
      <div className="center__form">
      <div className="sign post__wrapper">
        <div className="sign__logo">
          <img
            src="https://logodownload.org/wp-content/uploads/2021/10/meta-logo.png"
            alt="meta logo"
          />
        </div>
        <div className="sign__form">
          <div className="other__login">
            <Chip
              variant="outlined"
              color="error"
              icon={<GoogleIcon />}
              label="Đăng nhập bằng Google"
              clickable
              onClick={handleLoginWithGoogle}
            />
          </div>
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
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
