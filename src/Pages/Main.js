import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Profile from './Profile';
import './Main.css';

function Main() {
    return(
<body>
        <header>
            <a href="#" class="ProfileIcon">ProfileIcon</a>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
        
    <section>
        <h2 data-text="Create">Create</h2>
        <div class="planets">
            <div id="venus"></div>
            <div id="star1"></div>
           <div id="star2"></div>
           <div id="star3"></div>
           <div id="star4"></div>
           <div id="star5"></div>
           <div id="star6"></div>
           <div id="star7"></div>
           <div id="star8"></div>
           <div id="star9"></div>
        </div>
        <div id="sun"></div>
        <div class="meteor-cont">
           <div class="meteor-ani">
           <div id="meteor"></div>
        </div>
       </div>
       <div class="stars"></div>
    </section>     
</body>  
    );
}

export default Main;