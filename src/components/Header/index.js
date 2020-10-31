import React from 'react';

import netflixLogo from '../../assets/netflix_logo.png';
import userNetflix from '../../assets/user_netflix.jpg';

import './header.css';

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img src={netflixLogo} alt="Netflix-Logo"/>
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src={userNetflix} alt="User"/>
        </a>
      </div>
    </header>
  );
}
