import React from 'react';
import { Link } from 'react-router-dom';

//----------------------IMPORT MUI----------------------//
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h1>Connexion</h1>
      <p>
        Pas encore inscrit ? <Link to="/signUp">Rejoignez-nous !</Link>
      </p>
      <TextField id="email" label="EMAIL" variant="outlined" />
      <TextField id="password" label="MOT DE PASSE" variant="outlined" />
      <Button>SE CONNECTER</Button>
      <Link to="/">Mot de passe oublié ?</Link>
    </div>
  );
};

export default LoginForm;
