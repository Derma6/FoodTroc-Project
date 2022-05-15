import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from '../../../styles/images/foodtroc_logo.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <Button className="login-button" variant="outlined">
        Connexion
      </Button>
      <div className="logo-and-nav">
        <img src={Logo} alt={'foodtroc logo'} width={`250px`} />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/commentcamarche">Comment ça marche ?</Link>
          <Link to="/troquez">Troquez !</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
