import React from 'react';
import MainCSS from './Main.module.css';
import Menu from './Menu';
import Folder from './Folder';
import { SliderData } from './SliderData';
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth, logout} from "../Firebase";

function Main() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

    }, [user, loading])

    return(
    <body className= {MainCSS.body}>
            <header className= {MainCSS.header}>
                <a className= {MainCSS.a} href="#" class="ProfileIcon">ProfileIcon</a>
                <ul className= {MainCSS.ul}>
                    <li className= {MainCSS.li}><a href="#" class="active">Home</a></li>
                    <li className= {MainCSS.li}><a href="#">Profile</a></li>
                    <li className= {MainCSS.li}><a href="#" onClick={logout}>Logout</a></li>
                </ul>
            </header>
            
        <div>
            return <Folder slides={SliderData} />;
        </div>
        <footer>
        <Menu />
        </footer>
    </body>
    );
}

export default Main;