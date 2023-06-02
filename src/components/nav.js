import React from 'react';
import './Nav.scss';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';

function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener('scroll', transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? settoggleMenu(false) : settoggleMenu(true);
  }

  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
      <button className='nav__burger' onClick={handleClick}><RxHamburgerMenu size={30} className='icon-burger'/></button>
      <img src='./images/netflix-logo.png' alt='Logo Netflix' className='nav__logo' />
      <nav className='nav__links'>
        <a href='/' className='nav__link'>Accueil</a>
        <a href='/' className='nav__link'>Séries</a>
        <a href='/' className='nav__link'>Films</a>
        <a href='/' className='nav__link'>Nouveautés les plus regardées</a>
        <a href='/' className='nav__link'>Ma liste</a>
      </nav>
      <div className='nav__actions'>
        <a href='/' className='nav__action'><AiOutlineSearch /></a>
        <a href='/' className='nav__action'><MdNotifications /></a>
        <a href='/' className='nav__action'>
          <img src='./images/avatar.png' alt='' className='profile-picture'/>
        </a>
      </div>
    </div>
  );
}

export default Nav;