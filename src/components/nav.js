import React from "react";
import "./Nav.scss";
import { useState } from "react";
import { HiMenu } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  /* Scroll */

  /* Scroll */

  return <div className={`nav ${navBlack || toggleMenu ? "nav_black" : "nav_transparent"} ${toggleMenu && "show"}`}>
    <button className="nav_burger" onClick={handleClick}>
      <HiMenu size="30px"/>
    </button>
    <img src="./images/netflix-logo.png" className="nav_logo" alt="Netflix" />
    <nav className="nav_links">
      <a href="/" className="nav_link">Accueil</a>
      <a href="/" className="nav_link">Séries</a>
      <a href="/" className="nav_link">Films</a>
      <a href="/" className="nav_link">Nouveautés les plus regardées</a>
      <a href="/" className="nav_link">Ma liste</a>
    </nav>
    <div className="nav_actions">
      <a href="/" className="nav_action"><AiOutlineSearch size="28px"/></a>
      <a href="/" className="nav_action"><MdNotifications size="28px"/></a>
      <a href="/" className="nav_action">
        <img src="./images/avatar.png" className="avatar" alt=""/>
        <span className="arrowAvatar"><IoMdArrowDropdown size="20px"/></span>
      </a>
    </div>
    
  </div>
}
export default Nav;