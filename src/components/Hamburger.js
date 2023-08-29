import React, { useState } from 'react';
import img1 from './images/logo.png';
import img32 from './images/Hamburger_icon.svg';
import img33 from './images/cross.png';

const Hamburger = () => {
  let url5 = "#";
  const [myStyle, setStyle] = useState({ right:"-40%"});
  const enterNav=() =>{
    setStyle({right: "0%"})
  }
  const exitNav=() =>{
    setStyle({right: "-40%"})
  }
  return (
    <>
      <div className="hamburger-container">
        <div className="hamburger-logo">
          <div className="logo-item">
            <a href={url5}>
              <img src={img1} alt="logo" />
            </a>
          </div>
          <p>
            Udupi
          </p>
        </div>
        <div className="hamburger-change" >
          <button id="enter-nav" onClick={enterNav}>
            <img src={img32} alt="" />
          </button>

        </div>

      </div>
      <div className="nav-mobile" style={myStyle}>
        <div className="hamburger-change-cross">
          <button id="exit-nav" onClick={exitNav}>
            <img src={img33} alt=""/>
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
    </>
  );
}

export default Hamburger;
