import './Login_style.css'
import { FaDiscord, FaGoogle, FaGitAlt, FaFacebookF} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithUsernameAndPassword
} from "../Firebase";


function Login() {
    const [email, setEmailName] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/Profile");
      }, [user, loading]);
    return(
<div class="container">
<div class="forms-container">
    <div class="signin-signup">
        <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
                
                <input 
                    type="text" 
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmailName(e.target.value)}
                />
            </div>
             <div class="input-field">
                
                <input                     type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                 />    
            </div>
            <input 
                type="button"
                class="btn solid"
                onClick={() => logInWithUsernameAndPassword(email, password)}
                value="Login"
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

export default Login;