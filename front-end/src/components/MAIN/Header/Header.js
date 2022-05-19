import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../styles/images/foodtroc_logo.png';

import { UserContext } from '../../../utilities/Context';
import Menu from '../../Menu/Menu';

import './header.css';

const Header = ({ show, showMenu }) => {
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
        <NavLink activeclassname="active" to="/stock">
          Mon stock
        </NavLink>
        <NavLink activeclassname="active" to="/commentcamarche">
          Comment ça marche ?
        </NavLink>
        <NavLink activeclassname="active" to="/troquez">
          Troquez !
        </NavLink>
        {/* <NavLink activeclassname="active" to="/blog">
          Blog
        </NavLink> */}
        <NavLink activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </nav>
      {user ? (
        <>
          <p className="login-menu-button" onClick={() => showMenu(!show)}>
            Mon potager
          </p>
          {show && <Menu />}
        </>
      ) : (
        <Link to="/login" className="login-menu-button">
          Connexion
        </Link>
      )}
    </header>
  );
};

export default Header;
