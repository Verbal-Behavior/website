import React from 'react';
import MenuCSS from './Menu.module.css';
import {GoArchive, GoFileDirectory, GoBell, GoBug} from 'react-icons/go';

function Menu() {
    return (
        <body className={MenuCSS.body}>
            <div className={MenuCSS.container}>
                <ul className={MenuCSS.list}>
                    <li className={MenuCSS.content}>
                        <a className={MenuCSS.animation} href="#">
                            <div className={MenuCSS.icon}>
                                <div className={MenuCSS.indicator}>
                            <GoFileDirectory />
                            </div>
                            </div>
                            <h3 className={MenuCSS.text}>Test 1</h3>                           
                        </a>
                    </li>
                    <li className={MenuCSS.content}>
                        <a className={MenuCSS.animation} href="#">
                            <div className={MenuCSS.icon}>
                            <div className={MenuCSS.indicator}>
                            <GoBug />
                            </div>
                            </div>
                            <h3 className={MenuCSS.text}>Test 2</h3>
                        </a>
                    </li>
                    <li className={MenuCSS.content}>
                    <a className={MenuCSS.animation} href="#">
                        <div className={MenuCSS.icon}>
                            <div className={MenuCSS.indicator}>
                                <GoBell />
                            </div>
                        </div>
                        <h3 className={MenuCSS.text}>Test 3</h3>
                    </a>
                    </li>
                    <li className={MenuCSS.content}>
                        <a className={MenuCSS.animation} href="#">
                            <div className={MenuCSS.icon}>
                                <div className={MenuCSS.indicator}>
                                <GoArchive />
                                </div>
                            </div>
                            <h3 className={MenuCSS.text}>Test 4</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </body>
    );
}

export default Menu;