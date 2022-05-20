import React, { useContext, useState } from 'react';
import { easyUPDATE } from '../../../../utilities/easyFetch';

import { UserContext } from '../../../../utilities/Context';

import '../../../../styles/popups.css';

const ModifyName = ({ updateName }) => {
  const [newName, setNewName] = useState();

  const { user, updateUser } = useContext(UserContext);

  function changeName() {
    const obj = {
      uid: user.uid,
      name: newName,
      email: user.email,
      location: user.location,
    };
    easyUPDATE(obj, `http://localhost:3001/users/${user.uid}`, user.token).then(
      () => {
        updateUser({ ...user, name: newName });
        updateName(false);
      }
    );
  }

  return (
    <div className="pop-up">
      <h3 className="popup-header">Modifer votre prénom :</h3>
      <input className="popup-text" type="text" onChange={(e) => setNewName(e.target.value)} />
      <button className="validate-popup cancel" onClick={() => updateName(false)}>ANNULER</button>
      <button className="validate-popup" onClick={() => changeName()}>ENREGISTRER</button>
    </div>
  );
};

export default ModifyName;
