import React from "react";
import '../styling/pageStyle/loginOption.css'

const LoginOption = () =>{
    return(
        <div className="container-login-option">
            <img className="tennis-man" src={require('../assets/images/Fitman_tennis.png')} alt="" />
            <div className="container-login-option-title">
                <h1>Find Court</h1>
                <p>find the best tennis court available in your area</p>
            </div>
            <div className="container-login-option-login">
                <div className="container-login-option-login-text">
                    <span>have account? </span>
                    <span className="login-text-bold">Login</span>
                </div>
                <div className="container-login-option-login-email">
                    <img src={require('../assets/images/email-logo.png')} alt="" />
                    <span>Log in with Google</span>
                </div>
                <div className="container-login-option-login-facebook">
                    <img src={require('../assets/images/facebook-logo.png')} alt="" />
                    <span>Log in with Facebook</span>
                </div>
            </div>
        </div>
    )
}

export default LoginOption