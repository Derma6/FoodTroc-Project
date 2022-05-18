import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
} from '../../../utilities/firebase';

import '../../../styles/forms.css';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import { UserContext } from '../../../utilities/Context';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const { user, updateUser } = useContext(UserContext);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  async function getUser(uid, token) {
    const response = await fetch(`http://localhost:3001/users/${uid}`);
    const data = await response.json();
    updateUser({ ...data, token });
  }

  function logIn() {

    
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const token = userCredential.user.accessToken;
        getUser(uid, token);
        return uid
      })
      .then((uid) => {
        uid ? (
          navigate('/', { replace: true })
        ) : (
          navigate("../login", { replace: true })
        )
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });
  }

  return (
    <div className="form">
      <h1>Connexion</h1>
      <SeparatorLessMargin />
      <p>
        Pas encore inscrit ?{' '}
        <Link className="join-us" to="/signUp">
          Rejoignez-nous !
        </Link>
      </p>
      <div className="inputs">
        <input
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="MOT DE PASSE"
        ></input>
      </div>
      <div className="login-lost">
        <button
          className="validate-form"
          onClick={() => logIn(email, password)}
        >
          SE CONNECTER
        </button>
        <Link className="lost" to="/">
          Mot de passe oublié ?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
