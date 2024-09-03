import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
const LoginPage = () => {
  return (
    <div className="body">

        <div className="main-body">
            <div className="login-box">
                <div className="image">
                     <img
                    src="https://i.ibb.co/ZgWJrWL/Screenshot-2024-08-28-110736.png"
                    alt="Screenshot-2024-08-28-110736"
                    border="0"
                    ></img>
                </div>
                <div>
                    <p className="login-text">Login</p>
                    <p className="under-login-text">
                    See your Grouth and Get consulting support
                    </p>
                    <div className="google-login-button">
                    <button className="google-login">
                        {" "}
                        <img
                        className="google-img"
                        src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                        ></img>
                        Sign in with Google
                    </button>
                    </div>

                    <div className="email-box">
                    <label>Email*</label>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="mail@website.com"
                    ></input>
                    </div>
                    <div className="pass-box">
                    <label>Password*</label>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Min. 8 character"
                    ></input>
                    </div>

                    <div className="forgat-box">
                    <div>
                        {" "}
                        <input type="checkbox" className="checkbox"></input>
                        <label className="checkbox">remember</label>
                    </div>
                    <div>
                        <p>Forgat Password</p>
                    </div>
                    </div>

                    <div>
                    <Link className="input-box" to="/Home">
                        Login
                    </Link>
                    </div>
                </div>
            </div>

            <div className="Img">
                <img
                    className="Login-img"
                    src='https://i.ibb.co/gmWpHHJ/Screenshot-2024-08-28-105538.png" alt="Screenshot-2024-08-28-105538'
                ></img>
            </div>
        </div>
    </div>
  )
}
export default LoginPage
