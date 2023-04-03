import React from "react";
import "./../Nav.scss";

function Nav() {
  return <div className="nav">
    <button className="nav_burger"></button>
    <img src="../../public/images/netflix-logo.png" alt="Netflix" />
    <nav className="nav_link">
      <a href="/" className="nav_link">
        Accueil
      </a>
      <a href="/" className="nav_link">
        Séries
      </a>
      <a href="/" className="nav_link">
        Films
      </a>
    </nav>
    <div className="nav_actions">
      <a href="/" className="nav_action">
        search
      </a>
      <a href="/" className="nav_action">
        DIRECT
      </a>
      <a href="/" className="nav_action">
        Gift
      </a>
      <a href="/" className="nav_action">
        Notif
      </a>
      <a href="/" className="nav_action">
        <img src="../../public/images/avatar.png" alt=""/>
      </a>
    </div>
  </div>
}
export default Nav;