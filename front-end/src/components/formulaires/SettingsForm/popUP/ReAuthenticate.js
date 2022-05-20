import React, { useState } from 'react';
import {
  auth,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from '../../../../utilities/firebase';

import '../../../../styles/popups.css';


const ReAuthenticate = ({ setAuth }) => {
  const [password, setPassword] = useState();

  return (
    <div className="pop-up">
      <h3 className="popup-header">Cette action nécessite votre mot de passe :</h3>
      <input className="popup-text" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button
      className="validate-popup-auth"
        onClick={() => {
          const user = auth.currentUser;
          const credential = EmailAuthProvider.credential(user.email, password);

          reauthenticateWithCredential(user, credential)
            .then(() => {
              setAuth(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Se connecter
      </button>
    </div>
  );
};

export default ReAuthenticate;
