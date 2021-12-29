import { Button, Chip } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="other__login">
        <Chip
          variant="outlined"
          color="error"
          icon={<GoogleIcon />}
          label="Đăng nhập bằng Google"
          clickable
        />
      </div>
      <div className="sign__item">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div className="sign__item">
        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="form__actions">
        <Button sx={{ mr: 2 }} variant="contained">
          Đăng nhập
        </Button>
        <Link to="/register">
          <Button variant="outlined">Đăng ký</Button>
        </Link>
      </div>
    </>
  );
}

export default Login;
