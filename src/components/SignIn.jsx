import React from "react";
import "./SignIn.css";
import logo from "../img/logo.png";

export default function SignIn() {
    return (
    <div className="signin">
        <div>
            <div className="loginForm">
            <img className="signupLogo" src={logo} alt=""/>
            </div>
        </div>
    </div>

    );
}