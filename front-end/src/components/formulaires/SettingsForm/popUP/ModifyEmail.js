import React, { useState } from 'react';

import './PopUp.css';

const ModifyEmail = ({ updateEmail }) => {
  const [newEmail, setNewEmail] = useState();

  return (
    <div className="pop-up">
      <h3>Modifer votre email :</h3>
      <input type="text" onChange={(e) => setNewEmail(e.target.value)} />
      <button onClick={() => updateEmail(false)}>ANNULER</button>
      <button>ENREGISTRER</button>
    </div>
  );
};

export default ModifyEmail;
