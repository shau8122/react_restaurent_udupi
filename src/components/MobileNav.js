import React from 'react';
import img1 from './images/cross.png';
const MobileNav = () => {
  let url5="#";
  return (
    <div className="nav-mobile">
    <div className="hamburger-change-cross">
      <button id="exit-nav">
        <img src={img1} alt=""/>
      </button>
    </div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#aboutus">About Us</a></li>
      <li><a href="#chefs">Chefs</a></li>
      <li><a href={url5}>Features</a></li>
      <li><a href="#contact us">Contact Us</a></li>
    </ul>

  </div>
  );
}

export default MobileNav;
