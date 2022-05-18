import React, { useState } from 'react';

import './PopUp.css';

const ModifyName = ({ updateName }) => {
  const [newName, setNewName] = useState();

  return (
    <div className="pop-up">
      <h3>Modifer votre prénom :</h3>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => updateName(false)}>ANNULER</button>
      <button>ENREGISTRER</button>
    </div>
  );
};

export default ModifyName;
