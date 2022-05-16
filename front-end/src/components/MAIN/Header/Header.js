import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../styles/images/foodtroc_logo.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt={'foodtroc logo'} width={`250px`} />
      </Link>
      <nav>
        <NavLink activeClassName="active" to="/">
          Accueil
        </NavLink>
        <NavLink activeClassName="active" to="/commentcamarche">
          Comment ça marche ?
        </NavLink>
        <NavLink activeClassName="active" to="/troquez">
          Troquez !
        </NavLink>
        <NavLink activeClassName="active" to="/blog">
          Blog
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </nav>
      <Link to="/login" className="login-button">
        Connexion
      </Link>
    </header>
  );
};

export default Header;
