import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-text">
                <div className="social">
                    <img src={require("./Facebook_green.png")}/>
                    <img src={require("./Instagram_green.png")}/>
                    <img src={require("./twitter_green.png")}/>
                </div>
                <div className="legal-text">
                    <Link to="/contact">CONTACT</Link>
                    {/* <Link to="/cgv">CGV</Link> */}
                    {/* <Link to="/cookies">COOKIES</Link> */}
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
            <div className="footer-text">
                <p>DES FRUITS ET DES LEGUMES FRAIS TOUTE L'ANNEE</p>
            </div>
        </div>
    );
};

export default Footer;