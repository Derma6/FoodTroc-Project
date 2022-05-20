import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utilities/Context';
import { auth, signOut } from '../../utilities/firebase';
import SeparatorMenu from '../SeparatorMenu/SeparatorMenu';

import jardinnage from '../../styles/images/jardinage.png';

import './Menu.css';

const Menu = () => {
  const { user, updateUser } = useContext(UserContext);

  function logOut() {
    signOut(auth)
      .then(() => {
        updateUser(false);
      })
      .catch((error) => {});
  }

  console.log(user.token);
  return (
    <div className="menu show-state">
      <h3 className="menu-title show-state">Mon potager</h3>
      <SeparatorMenu />
      <div className="menu-container show-state">
        <img src={jardinnage} alt="logo jardinnage" className="show-state" />
        <div className="menu-info-user">
          <span className="menu-name show-state">{user.name}</span>
          <span className="menu-email show-state">{user.email}</span>
        </div>
      </div>
      <SeparatorMenu />
      <Link to="/parametres">Paramètres</Link>
      <Link to="/stock">Mon stock</Link>
      <button className="log-out-btn show-state" onClick={() => logOut()}>
        SE DÉCONNECTER
      </button>
    </div>
  );
};

export default Menu;
