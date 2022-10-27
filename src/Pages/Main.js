import React from 'react';
import MainCSS from './Main.module.css';
import Menu from './Menu';
import Folder from './Folder';
import { SliderData } from './SliderData';

function Main() {
    return(
<body className= {MainCSS.body}>
        <header className= {MainCSS.header}>
            <a className= {MainCSS.a} href="#" class="ProfileIcon">ProfileIcon</a>
            <ul className= {MainCSS.ul}>
                <li className= {MainCSS.li}><a href="#" class="active">Home</a></li>
                <li className= {MainCSS.li}><a href="#">Profile</a></li>
                <li className= {MainCSS.li}><a href="#">Login</a></li>
                <li className= {MainCSS.li}><a href="#">Registration</a></li>
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