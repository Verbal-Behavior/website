import React from 'react';
import MenuCSS from './Menu.module.css';
import {GoCircleSlash} from 'react-icons/go';
import {GrAddCircle,GrInstallOption} from 'react-icons/gr';
import { Navigate } from 'react-router-dom';

function Menu() {
    return (
        <body className={MenuCSS.body}>
            <div className={MenuCSS.container}>
                <ul className={MenuCSS.list}>
                    <li className={MenuCSS.content}>
                        <a className={MenuCSS.animation} href="#">
                            <div className={MenuCSS.icon}>
                                <div className={MenuCSS.indicator}>
                                    <GrAddCircle />
                                </div>
                            </div>
                            <button className={MenuCSS.text}>Create</button>
                        </a>
                    </li>
                    <li className={MenuCSS.content}>
                        <a className={MenuCSS.animation} href="#">
                            <div className={MenuCSS.icon}>
                                <div className={MenuCSS.indicator}>
                                    <GoCircleSlash />
                                </div>
                            </div>
                            <h3 className={MenuCSS.text}>Delete</h3>
                        </a>
                    </li>
                    <li className={MenuCSS.content}>
                        <a className={MenuCSS.animation} href="#">
                            <div className={MenuCSS.icon}>
                                <div className={MenuCSS.indicator}>
                                    <GrInstallOption />
                                </div>
                            </div>
                            <h3 className={MenuCSS.text}>Edit</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </body>
    );
}


export default Menu;