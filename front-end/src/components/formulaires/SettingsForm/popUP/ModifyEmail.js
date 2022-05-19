import React, { useContext, useState } from 'react';
import { auth, updateEmail } from '../../../../utilities/firebase';

import { UserContext } from '../../../../utilities/Context';

import './PopUp.css';
import { easyUPDATE } from '../../../../utilities/easyFetch';

const ModifyEmail = ({ updateEmailLoc, setAuth }) => {
  const [newEmail, setNewEmail] = useState();

  const { user, updateUser } = useContext(UserContext);

  function changeEmail() {
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        const obj = {
          uid: user.uid,
          name: user.name,
          email: newEmail,
          location: user.location,
        };
        easyUPDATE(
          obj,
          `http://localhost:3001/users/${user.uid}`,
          user.token
        ).then(() => {
          updateUser({ ...user, email: newEmail });
          updateEmailLoc(false);
        });
      })
      .catch((error) => {
        setAuth(true);
      });
  }

  return (
    <div className="pop-up">
      <h3>Modifer votre email :</h3>
      <input type="text" onChange={(e) => setNewEmail(e.target.value)} />
      <button onClick={() => updateEmailLoc(false)}>ANNULER</button>
      <button onClick={() => changeEmail()}>ENREGISTRER</button>
    </div>
  );
};

export default ModifyEmail;
