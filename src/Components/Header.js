import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header" >
      <img
        src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
        alt="header-img"
        className="img1"
      />
      <nav className="nav">
        <ul className="unorder">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#products">PRODUCTS</a>
          </li>
          <li>
            <a href="#ai-internship">AI INTERNSHIP</a>
          </li>
          <li>
            <a href="#career">CAREER</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact-us">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
