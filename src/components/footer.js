import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import "./footer.scss"

function footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_socials'>
          <a href='/' className='footer_link'>
            <ImFacebook
            style={{ 
              color: "#fff",
              width:"35px",
              height: "29px"
              }}
            />
          </a>
          <a href='/' className='footer_link'>
            <AiOutlineInstagram
            style={{ 
              color: "#fff",
              width:"36px",
              height: "29px"
              }}
            />
          </a>
          <a href='/' className='footer_link'>
            <AiOutlineTwitter
            style={{ 
              color: "#fff",
              width:"36px",
              height: "29px"
              }}
            />
          </a>
          <a href='/' className='footer_link'>
            <AiFillYoutube
            style={{ 
              color: "#fff",
              width:"36px",
              height: "29px"
              }}
            />
          </a>
        </div>
        <ul className='footer_links'>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
          <li>
            <a href='/' className='footer_link'>Lien footer</a>
          </li>
        </ul>
        <div className='footer_copy'>
          <p>Netflix Clone - tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;