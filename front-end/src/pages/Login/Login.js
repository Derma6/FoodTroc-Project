import React from "react";
import './Login.css'
//----------------------IMPORT COMPONENTS----------------------//

import LoginForm from '../../components/formulaires/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="login">
      <LoginForm />
    </div>
  );
};

export default Login;
