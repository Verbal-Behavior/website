import React, { useEffect } from "react";
import MainCSS from './Main.module.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";

function Welcome() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
		if (loading) return;
		if (user) return navigate("/Main");
  
	}, [user, loading])

    return(
<body className= {MainCSS.body}>
        <header className= {MainCSS.header}>
            <a className= {MainCSS.a} href="#" class="ProfileIcon">ProfileIcon</a>
            <ul className= {MainCSS.ul}>
                <li className= {MainCSS.li}><a href="#"><Link to="/Login">Login</Link></a></li>
                <li className= {MainCSS.li}><a href="#"><Link to="/Registration">Registration</Link></a></li>
            </ul>
        </header>
    <section className= {MainCSS.section}>
        <h1 className= {MainCSS.h1}>Welcome</h1>
            <div className= {MainCSS.star1} id="star1"></div>
           <div className= {MainCSS.star2} id="star2"></div>
           <div className= {MainCSS.star3} id="star3"></div>
           <div className= {MainCSS.star4} id="star4"></div>
           <div className= {MainCSS.star5} id="star5"></div>
           <div className= {MainCSS.star6} id="star6"></div>
           <div className= {MainCSS.star7} id="star7"></div>
           <div className= {MainCSS.star8} id="star8"></div>
           <div className= {MainCSS.star9} id="star9"></div>
        <div className= {MainCSS.sun} id="sun"></div>
    </section>
</body>
    );
}
 
export default Welcome;