import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../utilities/Context';
import { easyUPDATE } from '../../../../utilities/easyFetch';

import './PopUp.css';

const ModifyLocation = ({ updateLocation }) => {
  const [newLocation, setNewLocation] = useState();

  const { user, updateUser } = useContext(UserContext);

  function changeLocation() {
    const obj = {
      uid: user.uid,
      name: user.name,
      email: user.email,
      location: newLocation,
    };
    easyUPDATE(obj, `http://localhost:3001/users/${user.uid}`, user.token).then(
      () => {
        updateUser({ ...user, location: newLocation });
        updateLocation(false);
      }
    );
  }

  return (
    <div className="pop-up">
      <h3>Modifer votre localisation :</h3>
      <input type="text" onChange={(e) => setNewLocation(e.target.value)} />
      <button onClick={() => updateLocation(false)}>ANNULER</button>
      <button onClick={() => changeLocation()}>ENREGISTRER</button>
    </div>
  );
};

export default ModifyLocation;
