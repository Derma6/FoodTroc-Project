import React, { useContext, useEffect, useState } from 'react';

//--------------------IMPORT CONTEXT--------------------//
import { UserContext } from '../../../../utilities/Context';

// import { easyPOST } from '../../../../utilities/easyFetch';

//--------------------IMPORT COMPONENTS--------------------//
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

//--------------------IMPORT CSS--------------------//
import './SignUpForm.css';

const SignUpFom = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordC, setPasswordC] = useState();
  const [location, setLocation] = useState();
  const [isLoading, setLoading] = useState(false);

  const { user, updateUser } = useContext(UserContext);

  useEffect(() => {
    console.log(name);
  }, [name]);

  function signUp(setLoading) {
    const newUser = { name, email, location };

    console.log(newUser);

    // easyPOST(newUser, `http://localhost:3001/users/create`, token)
  }

  return (
    <div className="signUp-form">
      <h1>Inscription</h1>
      <SeparatorLessMargin />
      <div className="inputs">
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="PRÉNOM"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="EMAIL"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="MOT DE PASSE"
        />
        <input
          onChange={(e) => setPasswordC(e.target.value)}
          id="passwordCONFIRM"
          placeholder="COMFIRMER MOT DE PASSE"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          placeholder="LOCALISATION DE VOTRE POTAGER"
        />
      </div>
      <button onClick={() => signUp(setLoading)}>S'INSCRIRE</button>
    </div>
  );
};

export default SignUpFom;
