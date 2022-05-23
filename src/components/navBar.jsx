import React, { Component } from 'react';
import '../componentCSS/navBar.css';
import Logo from "../images/websiteLogo.png";

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <nav class="navbar container">
        <a href="#homepage" class="logo"><img  class="logos" src={Logo} alt="Web Page Logo" /></a>
        <input type="checkbox" id="toggler"/>
        <label for="toggler"><i class="ri-menu-line"></i></label>
        <div class="menu">
          <ul class="list">
            <li><a href="#homepage">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>);
    }
}
 
export default NavBar;