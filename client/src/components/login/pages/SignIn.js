import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setLogin} from '../../../state';

import {
    FacebookLoginButton,
    InstagramLoginButton
} from "react-social-login-buttons";

const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ''
    })
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
        setUser({
            ...user, [name]: value
        });
    }

    const sendRequest=async(type="login")=>{
      const res=await axios.post(`/api/auth/${type}`,{
          email:user.email,
          password:user.password
      }).catch(err=>console.log(err.message))
  
      const data=await res.data;
      console.log(data);
      return data;
  }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The form was submitted with the following data:");
        console.log(e.target.state);

        // sendRequest("login")
        // // .then((data)=>localStorage.setItems("userId",data.user._id))
        // .then((data)=>dispatch(
        //   setLogin({
        //     user: data.validUser,
        //     token: data.token,
        //   })
          
        // ))
        // .then(()=>{
        //   navigate('/categories')})

        sendRequest("login").then((data)=>{
          dispatch(
          setLogin({
            user: data.validUser,
            token: data.token,
          }))
          localStorage.setItem("userId",data.validUser._id)
          navigate('/categories')
        }).catch((e)=>{
          console.log(e.message)
          console.log(e.status)
        })
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
