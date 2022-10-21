import LoginCSS from './Login.module.style.css';
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
<div className= {LoginCSS.container} class="container">
<div className= {LoginCSS.formscontainer} class="forms-container">
    <div class="signin-signup">
        <form className= {LoginCSS.form} action="#" class="sign-in-form">
            <h2 className= {LoginCSS.h2} class="title">Sign in</h2>
            <div class="input-field">
                
                <input className= {LoginCSS.input}
                    type="text" 
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmailName(e.target.value)}
                />
            </div>
             <div className= {LoginCSS.inputfield} class="input-field">
                
                <input className= {LoginCSS.input}     type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                 />    
            </div>
            <input className= {LoginCSS.btn}
                type="button"
                class="btn solid"
                onClick={() => logInWithUsernameAndPassword(email, password)}
                value="Login"
            />
            <div className= {LoginCSS.socialmedia} class="social-media">
                <a className= {LoginCSS.socialicon} href="#" class="social-icon">
                    <FaFacebookF />
                </a>
                <a className= {LoginCSS.socialicon} href="#" class="social-icon">
                    <FaDiscord />
                </a>            
                <a className= {LoginCSS.socialicon} href="#" class="social-icon">
                    <FaGoogle />
                </a>
                <a className= {LoginCSS.socialicon} href="#" class="social-icon">
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