function Login() {
    return(
<div class="container">
<div class="forms-container">
    <div class="signin-signup">
        <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username"/>
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password"/>    
            </div>
            <input type="submit" class="btn solid" value="Login"/>
            <div class="social-media">
            <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
            </a>            
            <a href="#" class="social-icon">
            <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
            <i class="fab fa-linkedin-in"></i>
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