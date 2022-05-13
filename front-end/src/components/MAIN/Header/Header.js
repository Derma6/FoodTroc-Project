import React from 'react';
import { Link } from 'react-router-dom';
import  Button  from '@mui/material/Button'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-and-nav">
                <img src={require("./foodtroc_logo.png")}/>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/commentcamarche">Comment ça marche ?</Link>
                    <Link to="/troquez">Troquez !</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <Button className="login-button" variant="outlined">Connexion</Button>
        </div>
    );
};

export default Header;