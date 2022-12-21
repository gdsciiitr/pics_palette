import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState({
        email: "", password: "", name: "", hasAgreed: false
    })

    const handleChange = (event) => {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The form was submitted with the following data:");
        console.log(user.name);
    }
    return (
        <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="name"
                        value={user.name}
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
