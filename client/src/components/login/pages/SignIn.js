import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../actions/auth';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'

const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ''
    });
    const  [see,setSee]=useState(false);
    const [error,setError]=useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleChange = (e) => {
      setError(false);
        let target = e.target;
        let value = target.value;
        let name = target.name;
        setUser({
            ...user, [name]: value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // if()
        console.log("The form was submitted with the following data:");
        console.log(user);
        const data=await dispatch(signIn(user,navigate));
        console.log(data);
        if(!data){
          setError(true);
        }
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
                    <label className="formFieldLabel" htmlFor="password" >
                        Password <span style={{paddingLeft:"5px"}} onClick={()=>{setSee(!see)}}> {see?<AiFillEyeInvisible/>:<AiFillEye/>}</span>
                    </label>
                    <input
                        // type="password"
                        type={see?"text":"password"}
                        id="password"
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {
                  error && 
                  <div className='my-1' style={{color:'red', fontSize:'15px',fontWeight:'300'}}>
                    *wrong credentials. Please try again
                  </div>
                }

                <div className="formField">
                    <button className="formFieldButton" id="up">Sign In</button>{" "}
                    <NavLink to="/signup" className="formFieldNavLink">
                        Create an account
                    </NavLink><br/>
                    <NavLink to="/send-mail" className="formFieldNavLink">
                        Forget Password
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
