import React, { useContext, useState } from 'react';
import { auth, updateEmail } from '../../../../utilities/firebase';

import { UserContext } from '../../../../utilities/Context';

import '../../../../styles/popups.css';
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
      <h3 className="popup-header">Modifer votre email :</h3>
      <input className="popup-text" type="text" onChange={(e) => setNewEmail(e.target.value)} />
      <button className="validate-popup cancel" onClick={() => updateEmailLoc(false)}>ANNULER</button>
      <button className="validate-popup" onClick={() => changeEmail()}>ENREGISTRER</button>
    </div>
  );
};

export default ModifyEmail;
