import React, {useEffect} from 'react';
import SignUpFom from '../../components/formulaires/SignUpForm/SignUpFom';

import './SignUp.css';
const SignUp = () => {

  useEffect(() => {
    document.title = "Inscription - FoodTroc";  
  }, []);

  return (
    <div className="sign-up">
      <SignUpFom />
    </div>
  );
};

export default SignUp;
