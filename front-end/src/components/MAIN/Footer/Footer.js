import React, {useContext} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { UserContext } from '../../../utilities/Context';

import 'material-icons/iconfont/material-icons.css';
import './Footer.css'

const Footer = () => {

  const { user } = useContext(UserContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  function social(e){
    switch(e.target.alt){
      case "facebook logo": 
        window.open('https://facebook.com', '_blank', 'noopener,noreferrer');
        return null;
      case "instagram logo": 
        window.open('https://instagram.com', '_blank', 'noopener,noreferrer');
        return null;
      case "twitter logo": 
        window.open('https://twitter.com', '_blank', 'noopener,noreferrer');
        return null;
    }
  }

  return (
    <footer>
      <div className="social-text">
        <div className="social">
         <img 
          target="_blank"
          onClick={social} 
          src={require('./Facebook_green.png')} 
          alt={"facebook logo"}
          />
         <img
          target="_blank" 
          onClick={social}  
          alt={"instagram logo"} 
          src={require('./Instagram_green.png')} 
          />
         <img
          target="_blank" 
          onClick={social} 
          alt={"twitter logo"} 
          src={require('./twitter_green.png')} 
          />
        </div>
        <div className="legal-text">
          <Link to="/signup">ACCUEIL</Link>
          <Link to="/contact">CONTACT</Link>
        { !user &&   <Link to="/signup">INCRIPTION</Link> }
          <h3 onClick={scrollToTop} className="material-icons scroll-to-top">expand_less</h3>
          {/* <Link to="/cgv">CGV</Link> */}
          {/* <Link to="/cookies">COOKIES</Link> */}
          {/* <Link to="/blog">BLOG</Link> */}
        </div>
      </div>
      <div className="footer-text">
        <p>DES FRUITS ET DES LEGUMES FRAIS TOUTE L'ANNEE !</p>
      </div>
    </footer>
  );
};

export default Footer;
