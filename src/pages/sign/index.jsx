import Login from "./login";
import SignUp from "./signup";

import React from "react";
import "./sign-form.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function SignForm() {
  return (
    <div className="center__form">
      <div className="sign post__wrapper">
        <div className="sign__logo">
          <img
            src="https://logodownload.org/wp-content/uploads/2021/10/meta-logo.png"
            alt="meta logo"
          />
        </div>
        <div className="sign__form">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={SignUp} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default SignForm;
