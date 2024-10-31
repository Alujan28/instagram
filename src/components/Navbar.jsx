import React from "react";
import logo from "../img/logo.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt=""/>
            <ul>
                <li>SignUp</li>
                <li>SignIn</li>
                <li>Profile</li>
            </ul>
        </div>
    )
}