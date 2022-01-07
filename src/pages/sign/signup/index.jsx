import { Alert, Avatar, Button } from "@mui/material";
import firebaseClient from "config/firebase";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUserInformation } from "slice/userSlice";
import { updateOnlineUser } from "utils/updateOnlineUser";
import { setUserCustomInformation } from "utils/userCredential";

function SignUp() {
  const dispatch = useDispatch();

  // avatar src state
  const avatarRef = useRef();
  const [imageSelected, setImageSelected] = useState(null);
  const [avatarSrc, setAvatarSrc] = useState("");
  // input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // avatar src change
  const handleChangeAvatarSrc = () => {
    setImageSelected(avatarRef.current.files[0]);
  };
  useEffect(() => {
    if (avatarRef.current.files[0]) {
      let url = URL.createObjectURL(imageSelected);
      setAvatarSrc(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [imageSelected]);

  // error handler
  const [errorMessage, setErrorMessage] = useState("");

  const validateSignUpForm = () => {
    // required
    if (!name) {
      setErrorMessage("Phải nhập tên");
      return false;
    }
    // ky tu dac biet

    // xac nhan mat khau
    if (password !== passwordConfirmation) {
      setErrorMessage("Xác nhận mật khẩu không chính xác");
      return false;
    }
    return true;
  };
  // signup
  const handleClickSignUpButton = () => {
    // reset err value
    setErrorMessage("");

    // validate
    if (validateSignUpForm()) {
      // signup
      firebaseClient
        .signUpWithEmailAndPassword(name, email, password, imageSelected)
        .then((user) => {
          let userCustom = setUserCustomInformation(user);

          dispatch(setUserInformation(userCustom));
          updateOnlineUser(userCustom.uid);
        })
        .catch((err) => setErrorMessage(err));
    }
  };

  return (
    <>
      <div className="sign__item">
        <label htmlFor="avatar">Avatar:</label>
        {avatarSrc && (
          <div className="avatar__preview">
            <Avatar
              src={avatarSrc}
              alt=""
              sx={{ width: "120px", height: "120px" }}
            />
          </div>
        )}
        <input
          ref={avatarRef}
          type="file"
          accept="image/*"
          onChange={handleChangeAvatarSrc}
        />
      </div>
      <div className="sign__item">
        <label htmlFor="name">Họ và tên:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <div className="sign__item">
        <label htmlFor="password__confirmation">Xác nhận mật khẩu:</label>
        <input
          type="password"
          name="password__confirmation"
          id="password__confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <div className="form__actions">
        <Link to="/">
          <Button sx={{ mr: 2 }} variant="outlined">
            Đăng nhập
          </Button>
        </Link>
        <Button onClick={handleClickSignUpButton} variant="contained">
          Đăng ký
        </Button>
      </div>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </>
  );
}

export default SignUp;
