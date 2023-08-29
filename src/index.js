import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import Week from './components/Week';
import Contact from './components/Contact';
import Foot from './components/Foot';
import Chefs from './components/Chefs';
import ScrolToTop from './components/scrolToTop';
import Hamburger from './components/Hamburger';
import MobileNav from './components/MobileNav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Hamburger/>
    <MobileNav/>
    <Home/>
    <About/>
    <Menu/>
    <Chefs/>
    <Week/>
    <Contact/>
    <Foot/>
    <ScrolToTop/>
  </React.StrictMode>
);


