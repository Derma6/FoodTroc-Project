import React from 'react';

import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import './SignUpForm.css';

const SignUpFom = () => {
  return (
    <div className="signUp-form">
      <h1>Inscription</h1>
      <SeparatorLessMargin />
      <div className="inputs">
        <input id="name" placeholder="PRÉNOM" />
        <input id="email" placeholder="EMAIL" />
        <input id="password" placeholder="MOT DE PASSE" />
        <input id="passwordCONFIRM" placeholder="COMFIRMER MOT DE PASSE" />
        <input id="location" placeholder="LOCALISATION DE VOTRE POTAGER" />
      </div>
      <button>S'INSCRIRE</button>
    </div>
  );
};

export default SignUpFom;
