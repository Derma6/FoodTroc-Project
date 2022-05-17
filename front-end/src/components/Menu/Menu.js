import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utilities/Context';
import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';

import './Menu.css';

const Menu = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="menu">
      <h3>Mon potager</h3>
      <SeparatorLessMargin />
      <div className="menu-info-user">
        <span className="menu-name">{user.name}</span>
        <span className="menu-email">{user.email}</span>
      </div>
      <SeparatorLessMargin />
      <Link to="/parametres">Paramètres</Link>
      <Link to="/stock">Mon stock</Link>
      <button>SE DÉCONNECTER</button>
    </div>
  );
};

export default Menu;
