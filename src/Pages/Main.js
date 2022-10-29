import React from 'react';
import MainCSS from './Main.module.css';
import Menu from './Menu';
import Folder from './Folder';
import { SliderData } from './SliderData';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {db, auth, logout} from "../Firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

function Main() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const userCollectionRef = collection(db, "users");

    const getUser = async () => {
        const q = query(userCollectionRef, where("uid", "==", user?.uid))
        const data = await getDocs(q);
        const mappedData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        console.log(mappedData[0].id);
        window.userId = mappedData[0].id;
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        getUser(); 

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