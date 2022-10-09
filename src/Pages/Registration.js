import './Login_style.css'
import { FaDiscord} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Registration() {
    return(
<div class="container">
<div class="forms-container">
    <div class="signin-signup">
        <form action="#" class="sign-in-form">
            <h2 class="title">Registration</h2>
            <div class="input-field">
                <input type="text" placeholder="Username"/>
                </div>
            <div class="input-field">
                <input type="text" placeholder="Email"/>
            </div>
                <div class="input-field">
                    <input type="password" placeholder="Password"/>    
            </div>
            <input type="submit" class="btn solid" value="Login"/>
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