import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">Accueil</Link>
      <Link to="/commentcamarche">Comment ça marche ?</Link>
      <Link to="/troquez">Troquez !</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavBar;
