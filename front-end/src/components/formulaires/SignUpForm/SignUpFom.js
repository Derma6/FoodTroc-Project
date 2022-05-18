import React, { useContext, useEffect, useState } from 'react';

//--------------------IMPORT CONTEXT--------------------//
import { UserContext } from '../../../utilities/Context';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '../../../utilities/firebase';

import { easyPOST } from '../../../utilities/easyFetch';

//--------------------IMPORT COMPONENTS--------------------//
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

//--------------------IMPORT CSS--------------------//
import '../../../styles/forms.css';

const SignUpFom = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordC, setPasswordC] = useState();
  const [location, setLocation] = useState();

  const [isLoading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState()

  const { user, updateUser } = useContext(UserContext);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  function signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const token = userCredential.user.accessToken;
        const newUser = { uid, name, email, location };
        easyPOST(newUser, `http://localhost:3001/users`, token);
        updateUser({ ...newUser, token });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignInError(true)
      });
  }

  return (
    <div className="form">
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
      {
        signInError && <h4 style={{margin: "3% 0 0% 0", color: "darkgreen"}}>Veuillez vérifier vos informations</h4>
      }
      <button className="validate-form" onClick={() => signUp()}>
        S'INSCRIRE
      </button>
    </div>
  );
};

export default SignUpFom;
