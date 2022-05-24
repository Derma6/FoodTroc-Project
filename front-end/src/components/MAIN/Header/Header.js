import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../utilities/Context';
import { auth, signOut } from '../../../utilities/firebase';

import Logo from '../../../styles/images/foodtroc_logo.png';
import Menu from '../../Menu/Menu';
import jardinage from '../../../styles/images/jardinage.png';
import menuIcon from '../../../styles/images/menu_icon.png';
import userIcon from '../../../styles/images/user_icon.png';


import './header.css';

const Header = ({ show, showMenu }) => {
  const { user, updateUser } = useContext(UserContext);

  const [displayMenu, setDisplayMenu] = useState()
  const [displayUserMenu, setDisplayUserMenu] = useState()
  // const navigate = useNavigate()

  const sideMenu = {
    button: {
      right: displayMenu ? "0" : "100%"
    },
    icon: {
      backgroundColor: displayMenu && "rgba(76, 126, 75, 0.63140, 233, 139, 0.63)" ,
      borderRadius: displayMenu && "50%"
    },
    user: {
      left : displayUserMenu ? "0" : "100%"
    },
    userIcon: {
      backgroundColor: displayUserMenu && "rgba(76, 126, 75, 0.63140, 233, 139, 0.63)" ,
      borderRadius: displayUserMenu && "50%"
    },
  };

  // function logOut() {
  //   signOut(auth)
  //     .then(() => {
  //       updateUser(false);
  //     })
  //     .then(() => {
  //       navigate('/', { replace: true })
  //     })
  //     .catch((error) => {});
  // }

  return (
    <header>
      <div 
        className="user-side-logo"
        onClick={() => {
          setDisplayUserMenu(!displayUserMenu)
          if(displayMenu) {
          setDisplayMenu(!displayMenu)}
        }}
      >
      <img 
        className="responsive-menu" 
        id="user-icon" 
        style={sideMenu.userIcon}
        
        src={userIcon} 
        alt="user icon"
      />
        { user && (
          <p>{user.name}</p>
        )}
      </div>
      <Link to="/">
        <img 
        id="foodtroc-logo"
        src={Logo} 
        alt={'foodtroc logo'} 
        width={`250px`} 
        />
      </Link>
      <img 
      className="responsive-menu" 
      style={sideMenu.icon}
      onClick={() => {
        if(displayUserMenu) {
          setDisplayUserMenu(!displayUserMenu)}
        setDisplayMenu(!displayMenu)}
      }
      id="menu-burger" 
      src={menuIcon} 
      alt="menu icon"
      />
      <nav>
        <NavLink activeclassname="active" to="/">
          Accueil
        </NavLink>
        <NavLink activeclassname="active" to="/commentcamarche">
          Comment ça marche ?
        </NavLink>
        <NavLink  to={user ? "/troquez" : "/login"} activeclassname="active">
          Troquez !
        </NavLink>
        {user && (
          <NavLink activeclassname="active" to="/stock">
            Mon stock
          </NavLink>
        )}
        {/* <NavLink activeclassname="active" to="/blog">
          Blog
        </NavLink> */}
        <NavLink activeclassname="active" to="/contact">
          Contact
        </NavLink>
      </nav>
      {user ? (
        <div className="header-user">
          <p className="login-menu-button" onClick={() => showMenu(!show)}>
            Mon potager
          </p>
          <img
            src={jardinage}
            // onClick={dispMenu}
            className="user-icon"
            alt="logo jardinnage"
          />
          {show && <Menu />}
        </div>
      ) : (
        <Link
          to="/login"
          className="login-menu-button"
          id="connexion"
          // onClick={dispMenu}
        >
          Connexion
        </Link>
      )}
      { displayMenu && (
        <div className="alt-menu" style={sideMenu.button}>
          <NavLink  to="/">
            Accueil
          </NavLink>
          <NavLink  to="/commentcamarche">
            Comment ça marche ?
          </NavLink>
          <NavLink  to={user ? "/troquez" : "/login"} >
            Troquez !
          </NavLink>
          {user && (
            <NavLink  to="/stock">
              Mon stock
            </NavLink>
          )}
          <NavLink  to="/contact">
            Contact
          </NavLink>
        </div>
      )}
      { displayUserMenu && (
        <div className="alt-user-menu" style={sideMenu.user}>
          {user ? (
          <div className="side-user-menu">
            <div className="side-menu-info-user">
            </div>
            <Link to="/parametres">Paramètres</Link>
            <Link to="/stock">Mon stock</Link>
            <button className="log-out-side-btn show-state">
            SE DÉCONNECTER
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="login-side-menu-button"
            // onClick={() => logOut()}
          >
            Connexion
          </Link>
        )}
          </div>
        )}
    </header>
  );
};

export default Header;
