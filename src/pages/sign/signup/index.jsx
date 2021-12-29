import { Button, Chip } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="other__login">
        <Chip
          variant="outlined"
          color="error"
          icon={<GoogleIcon />}
          label="Đăng ký bằng Google"
          clickable
        />
      </div>
      <div className="sign__item">
        <label htmlFor="name">Họ và tên:</label>
        <input type="text" id="name" />
      </div>
      <div className="sign__item">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div className="sign__item">
        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="sign__item">
        <label htmlFor="password__confirmation">Xác nhận mật khẩu:</label>
        <input type="password" name="password__confirmation" id="password__confirmation" />
      </div>
      <div className="form__actions">
        <Link to="/">
          <Button sx={{ mr: 2 }} variant="outlined">
            Đăng nhập
          </Button>
        </Link>
        <Button variant="contained">Đăng ký</Button>
      </div>
    </>
  );
}

export default SignUp;
