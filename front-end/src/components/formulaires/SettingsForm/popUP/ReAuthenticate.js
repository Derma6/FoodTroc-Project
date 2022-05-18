import React, { useState } from 'react';
import {
  auth,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from '../../../../utilities/firebase';

const ReAuthenticate = ({ setAuth }) => {
  const [password, setPassword] = useState();

  return (
    <div className="pop-up">
      <h3>Cette action nécessite votre mot de passe :</h3>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button
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
        log
      </button>
    </div>
  );
};

export default ReAuthenticate;
