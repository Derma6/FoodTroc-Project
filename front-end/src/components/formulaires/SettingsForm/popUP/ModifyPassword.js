import React, { useState } from 'react';
import { auth, updatePassword } from '../../../../utilities/firebase';

const ModifyPassword = ({ updatePass, setAuth }) => {
  const [newPass, setNewPass] = useState();
  const [newPassC, setNewPassC] = useState();
  const [error, setError] = useState(false);
  //   const [isLoading, setLoading] = useState(false);

  function changePassword() {
    if (newPass !== newPassC) setError(true);

    updatePassword(auth.currentUser, newPass)
      .then(() => {
        updatePass(false);
      })
      .catch((error) => {
        setAuth(true);
      });
  }

  return (
    <div className="pop-up">
      <h3>Modifer votre mot de passe :</h3>
      <label htmlFor="newP">Nouveau mot de passe : </label>
      <input
        name="newP"
        type="password"
        onChange={(e) => setNewPass(e.target.value)}
      />
      <label htmlFor="newPC">Confirmer votre mot de passe :</label>
      <input
        name="newPC"
        type="password"
        onChange={(e) => setNewPassC(e.target.value)}
      />
      {error && <p>Veuillez entrer des mots de passe identiques.</p>}
      <button onClick={() => updatePass(false)}>ANNULER</button>
      <button onClick={() => changePassword()}>ENREGISTRER</button>
    </div>
  );
};

export default ModifyPassword;
