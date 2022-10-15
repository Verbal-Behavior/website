import './Main.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return(
    <body>
        <header>
            <a href="#" class="logo">Logo</a>
            <ul>
                <li><Link to ="/Main">Main</Link></li>
            </ul>
        </header>
    </body>
    );
}

export default Main;