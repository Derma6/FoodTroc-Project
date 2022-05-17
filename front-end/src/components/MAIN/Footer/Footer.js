import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="social-text">
        <div className="social">
          <Link to="https://www.facebook.com"><img src={require('./Facebook_green.png')} alt={"facebook logo"}/></Link>
          <Link to="https://www.instagram.com"><img alt={"instagram logo"} src={require('./Instagram_green.png')} /></Link>
          <Link to="https://www.twitter.com"><img alt={"twitter logo"} src={require('./twitter_green.png')} /></Link>
        </div>
        <div className="legal-text">
          <Link to="/contact">CONTACT</Link>
          {/* <Link to="/cgv">CGV</Link> */}
          {/* <Link to="/cookies">COOKIES</Link> */}
          <Link to="/blog">BLOG</Link>
        </div>
      </div>
      <div className="footer-text">
        <p>DES FRUITS ET DES LEGUMES FRAIS TOUTE L'ANNEE !</p>
      </div>
    </footer>
  );
};

export default Footer;
