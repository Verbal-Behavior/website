import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Profile from './Profile';
import './style.css';
import image from './images/stars.png';
import image2 from './images/moon.png';
import image3 from './images/mountains_front.png';
import image4 from './images/mountains_behind.png';

function Main() {
    return(
<body>
        <header>
            <a href="#" class="logo">logo</a>
            <div>
      <main>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Main' element={<Main />} />
        </Routes>
      </main>
    </div>
        </header>
    <section>
        <img src={image} id="stars"/>
        <img src={image2} id="moon"/>
        <img src={image4} id="mountains_behind"/>
        <h2 id="text">Moon Light</h2>
        <a href="#sec" id="btn">Explore</a>
        <img src={image3} id="mountains_front"></img>
    </section>
        <div class="sec" id="sec">
            <h2>Effect</h2>
            <p>WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome</p>
        </div>       
</body>  
    );
}

export default Main;