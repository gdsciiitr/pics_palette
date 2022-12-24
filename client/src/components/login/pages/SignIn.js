import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../actions/auth';

const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ''
    })

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
        setUser({
            ...user, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The form was submitted with the following data:");
        console.log(user);
        dispatch(signIn(user,navigate));
    }


    return (
        <div className="App">
      <div className="appAside" />
        <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/signin"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem pageSwitcherItem-active"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="formTitle">
          <NavLink
            to="/signin"
            activeClassName="formTitleLink-active"
            className="formTitleLink formTitleLink-active"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                        E-Mail Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="formFieldInput"
                        placeholder="Enter your email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign In</button>{" "}
                    <NavLink to="/signup" className="formFieldNavLink">
                        Create an account
                    </NavLink>
                </div>

                {/* <div className="socialMediaButtons">
                    <div className="facebookButton">
                        <FacebookLoginButton onClick={() => alert("Hello")} />
                    </div>

                    <div className="instagramButton">
                        <InstagramLoginButton onClick={() => alert("Hello")} />
                    </div>
                </div> */}
            </form>
        </div>
        </div>
        </div>
    )
}

export default SignIn
