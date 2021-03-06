import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
} from '../../../utilities/firebase';

import '../../../styles/forms.css';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import { DataLoading, UserContext } from '../../../utilities/Context';
import { redirect } from '../../../utilities/redirect';

const LoginForm = () => {
  const { user, updateUser } = useContext(UserContext);
  const { isDataLoading, setDataLoading } = useContext(DataLoading);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState();

  const navigate = useNavigate();

  async function getUser(uid, token) {
    const response = await fetch(`http://localhost:3001/users/${uid}`);
    const data = await response.json();
    updateUser({ ...data, token });
  }

  function logIn() {
    setDataLoading(true);

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const token = userCredential.user.accessToken;
        getUser(uid, token);
        return uid;
      })
      .then((uid) => {
        setDataLoading(false);

        // const path = document.referrer.split('');
        // console.log(path);

        if (uid) {
          navigate('/', { replace: true });
          //document.referrer in prodution
        }
      })
      .catch((error) => {
        // error.style.display="block"
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(true);
        setDataLoading(false);
      });
  }

  return (
    <div
      className="form"
      onKeyDown={(e) => e.key === 'Enter' && logIn(email, password)}
    >
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
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="MOT DE PASSE"
        ></input>
      </div>
      {loginError && (
        <h4 style={{ margin: '3% 0 -5% 0', color: 'darkgreen' }}>
          Email ou mot de passe invalide
        </h4>
      )}
      <div className="login-lost">
        <button
          className="validate-form"
          onClick={() => logIn(email, password)}
        >
          SE CONNECTER
        </button>
        <Link className="lost" to="/">
          Mot de passe oubli?? ?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
