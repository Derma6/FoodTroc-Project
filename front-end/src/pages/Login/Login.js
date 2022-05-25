import React, { useEffect } from 'react';
import './Login.css';
//----------------------IMPORT COMPONENTS----------------------//

import LoginForm from '../../components/formulaires/LoginForm/LoginForm';

const Login = () => {
  useEffect(() => {
    document.title = 'Connexion - FoodTroc';
  }, []);

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
};

export default Login;
