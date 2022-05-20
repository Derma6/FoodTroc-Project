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
import { useNavigate } from 'react-router-dom';

const SignUpFom = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordC, setPasswordC] = useState();
  const [location, setLocation] = useState();

  const [isLoading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState();
  const [passwMatch, setPasswMatch] = useState()
  const [invalidEmail, setInvalidEmail] = useState()
  const [buttonGrey, setButtonGrey] = useState(false)

  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const emailCreate = document.querySelector("#email");
  const logInBtn = document.querySelector(".validate-form")

  const passwordCreate = document.querySelector("#password");
  const passwordVerify = document.querySelector("#passwordCONFIRM");  

  const styles = {
    
    button:{
      backgroundColor: buttonGrey === true && "darkgrey" 
    }
  }

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  function signUp() {

    if ( passwMatch ) return setPasswMatch(true) 
    if ( invalidEmail ) return setInvalidEmail(true)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const token = userCredential.user.accessToken;
        const newUser = { uid, name, email, location };
        easyPOST(newUser, `http://localhost:3001/users`, token);
        updateUser({ ...newUser, token });
        return uid;
      })
      .then((uid) => {
        uid && navigate('/', { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignInError(true);
      });
  }

  function verifyPass() {
    if (passwordCreate.value != passwordVerify.value) {
      setPasswMatch(true)
      setButtonGrey(true)
      console.log(passwMatch)
    } else {
      setPasswMatch(false)
      setButtonGrey(false)
    }
  }

  function verifyEmail() {
    if (emailCreate.value.match(validRegex)) {
      setInvalidEmail(false)
      setButtonGrey(false)
    } else {
      setInvalidEmail(true)
      setButtonGrey(true)
    }
}


  return (
    <div className="form">
      <h1>Inscription</h1>
      <SeparatorLessMargin />
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="PRÉNOM"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="EMAIL"
        />
        {invalidEmail && (
        <h4 style={{ margin: '3% 0 0% 0', color: 'darkgreen' }}>
          Veuillez entrer une adresse mail valide
        </h4>
      )}
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="MOT DE PASSE"
        />
        <input
          type="password"
          onChange={(e) => setPasswordC(e.target.value)}
          onBlur={verifyPass}
          id="passwordCONFIRM"
          placeholder="COMFIRMER MOT DE PASSE"
          />
          {passwMatch && (
          <h4 style={{ margin: '3% 0 0% 0', color: 'darkgreen' }}>
            Les deux mots de passes ne correspondent pas
          </h4>
        )}
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          placeholder="LOCALISATION DE VOTRE POTAGER"
        />
      </div>
      {signInError && (
        <h4 style={{ margin: '3% 0 0% 0', color: 'darkgreen' }}>
          Veuillez vérifier vos informations
        </h4>
      )}
      <button style={styles.button} className="validate-form" onClick={() => {
        signUp()
        verifyEmail()
        verifyPass()
        }}>
        S'INSCRIRE
      </button>
    </div>
  );
};

export default SignUpFom;
