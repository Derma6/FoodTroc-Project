import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../styles/images/foodtroc_logo.png';

import { UserContext } from '../../../utilities/Context';
import Menu from '../../Menu/Menu';

import './header.css';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt={'foodtroc logo'} width={`250px`} />
      </Link>
      <nav>
        <NavLink activeclassname="active" to="/">
          Accueil
        </NavLink>
        <NavLink activeclassname="active" to="/commentcamarche">
          Comment ça marche ?
        </NavLink>
        <NavLink activeclassname="active" to="/troquez">
          Troquez !
        </NavLink>
        <NavLink activeclassname="active" to="/blog">
          Blog
        </NavLink>
        <NavLink activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </nav>
      {user ? (
        <>
          <h2>Mon potager</h2>
          <Menu />
        </>
      ) : (
        <Link to="/login" className="login-button">
          Connexion
        </Link>
      )}
    </header>
  );
};

export default Header;
