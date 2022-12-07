import React, { useEffect } from "react";
import MainCSS from './Main.module.css';
import Folder from './Folder';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth, logout } from "../Firebase";
import { GoCircleSlash } from 'react-icons/go';
import { GrAddCircle, GrInstallOption } from 'react-icons/gr';
import { IoIosFolderOpen, IoMdImages } from "react-icons/io";

function Main() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

    }, [user, loading])

    return(
    <div className= {MainCSS.body}>
            <header className= {MainCSS.header}>
                <a className= {MainCSS.a}></a>
                <ul className= {MainCSS.ul}>
                    <li className= {MainCSS.li}><a href="#" class="active">Home</a></li>
                    <li className= {MainCSS.li}><a href="#">Profile</a></li>
                    <li className= {MainCSS.li}><a href="#" onClick={logout}>Logout</a></li>
                </ul>
            </header>
            
        <div>
          <Folder />
        </div>
        
            <div className={MainCSS.container}>
                <ul className={MainCSS.list}>
                    <li className={MainCSS.content}>
                        <a className={MainCSS.animation} href="#">
                            <div className={MainCSS.icon}>
                                <div className={MainCSS.indicator}>
                                    <GrAddCircle />
                                </div>
                            </div>
                            <div className={MainCSS.text}><Link to="/CreateCardPage">Create Card</Link></div>
                        </a>
                    </li>
                    <li className={MainCSS.content}>
                        <a className={MainCSS.animation} href="#">
                            <div className={MainCSS.icon}>
                                <div className={MainCSS.indicator}>
                                    <IoIosFolderOpen />
                                </div>
                            </div>
                            <div className={MainCSS.text}><Link to="/CreateFolderPage">Create Folder</Link></div>
                        </a>
                    </li>
                    <li className={MainCSS.content}>
                        <a className={MainCSS.animation} href="#">
                            <div className={MainCSS.icon}>
                                <div className={MainCSS.indicator}>
                                    <IoMdImages />
                                </div>
                            </div>
                            <div className={MainCSS.text}><Link to="/ImageUpload">Upload Image</Link></div>
                        </a>
                    </li>
                    <li className={MainCSS.content}>
                        <a className={MainCSS.animation} href="#">
                            <div className={MainCSS.icon}>
                                <div className={MainCSS.indicator}>
                                    <GoCircleSlash />
                                </div>
                            </div>
                            <h3 className={MainCSS.text}>Delete</h3>
                        </a>
                    </li>
                    <li className={MainCSS.content}>
                        <a className={MainCSS.animation} href="#">
                            <div className={MainCSS.icon}>
                                <div className={MainCSS.indicator}>
                                    <GrInstallOption />
                                </div>
                            </div>
                            <h3 className={MainCSS.text}>Edit</h3>
                        </a>
                    </li>
                </ul>
            </div>
        
    </div>
    );
}

export default Main;