import './Login.module.style.css';
import { FaDiscord, FaGoogle, FaGitAlt, FaFacebookF } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword
} from "../Firebase";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!userName) alert("Please enter name");
    registerWithEmailAndPassword(userName, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Profile");
  }, [user, loading]);

    return(
<div class="container">
<div class="forms-container">
    <div class="signin-signup">
        <form action="#" class="sign-in-form">
            <h2 class="title">Registration</h2>
            <div class="input-field">
                <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                />
            </div>
            <div class="input-field">
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div class="input-field">
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />    
            </div>
                <input 
                    type="button" 
                    class="btn solid" 
                    onClick={register} 
                    value="Register"
                />
            <div class="social-media">
                <a href="#" class="social-icon">
                    <FaFacebookF />
                </a>
                <a href="#" class="social-icon">
                    <FaDiscord />
                </a>            
                <a href="#" class="social-icon">
                    <FaGoogle />
                </a>
                <a href="#" class="social-icon">
                    <FaGitAlt />
                </a>            
            </div>
        </form>
    </div>
</div>
<div class="panels-container"></div>
    </div>
    );
}

export default Registration;