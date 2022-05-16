import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h1>Connexion</h1>
      <SeparatorLessMargin />
      <p>
        Pas encore inscrit ?{' '}
        <Link className="joinUs" to="/signUp">
          Rejoignez-nous !
        </Link>
      </p>
      <div className="inputs">
        <input placeholder="EMAIL" />
        <input rows="10" placeholder="MOT DE PASSE"></input>
      </div>
      <div className="login-lost">
        <button>SE CONNECTER</button>
        <Link className="lost" to="/">
          Mot de passe oublié ?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
