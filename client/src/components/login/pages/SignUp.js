import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../../../actions/auth';

const SignUp = () => {
    const [user, setUser] = useState({
        email: "", password: "", username: "", hasAgreed: false,batch:''
    });
    const [file,setFile]=useState();

    const formData=new FormData();

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleChange = (event) => {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
        // console.log(name)
        // console.log()
      
        setUser({ ...user, [name]: value });
    }
    // const[profilePicture,setprofilePicture]=useState('')
    // const imageHandle=(event)=>{
    //     setprofilePicture(event.target.files[0])
    // }
    // const handleApi=()=>{
    //     const formData=new FormData()
    //     formData.append('profilePicture',profilePicture)
    //     console.log(formData)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("The form was submitted with the following data:");
        
        formData.append("profilePicture",file);
        console.log(user);
        console.log(...formData);
        formData.append("username",user.username);
        formData.append("email",user.email);
        formData.append("password",user.password);
        formData.append("batch",user.batch);
        console.log(...formData);
        dispatch(signUp(formData,navigate));
        console.log(JSON.stringify(user));
      
    }
    return (
        <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="name">
                        Username
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>
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
                    />
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="password">
                        Profile picture
                    </label>
                    <input
                        type="file"
                        id="profilepicture"
                        className="formFieldInput"
                        name="profilePicture"
                        onChange={(event)=>{setFile(event.target.files[0])
                }}
                    />
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="batch">
                        Batch
                    </label>
                    <input
                        type="text"
                        id="batch"
                        className="formFieldInput"
                        placeholder="Enter your batch"
                        name="batch"
                        value={user.batch}
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="formField">
                    <label className="formFieldLabel" htmlFor="imagee">
                        Upload your profile pic!
                    </label>
                    <input
                        type="file"
                        id="imagee"
                        className="formFieldInput"
                        placeholder="Enter your profile photo"
                        name="profilePicture"
                        value={profilePicture}
                        onChange={imageHandle}
                    />
                </div> */}
                <div className="formField">
                    <label className="formFieldCheckboxLabel">
                        <input
                            className="formFieldCheckbox"
                            type="checkbox"
                            name="hasAgreed"
                            value={user.hasAgreed}
                            onChange={handleChange}
                        />{" "}
                        I agree all statements in{" "}
                        <a href="null" className="formFieldTermsLink">
                            terms of service
                        </a>
                    </label>
                </div>

                <div className="formField">
                    <button className="formFieldButton" onClick={handleSubmit}>Sign Up</button>
                    <NavLink to="/signin" className="formFieldLink">
                        I'm already member
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default SignUp
