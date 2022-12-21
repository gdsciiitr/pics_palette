import React from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";
import SignUp from "./pages/SignUp";

const Login = () => {
  return (
    <div className="App">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/signin"
            className="pageSwitcherItem"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/signup"
            className="pageSwitcherItem pageSwitcherItem-active"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="formTitle">
          <NavLink
            to="/signin"
            className="formTitleLink"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/signup"
            className="formTitleLink formTitleLink-active"
          >
            Sign Up
          </NavLink>
        </div>
        <SignUp />
      </div>
    </div>
  );
}

export default Login;
