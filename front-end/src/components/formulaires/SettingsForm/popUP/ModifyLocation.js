import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../utilities/Context';
import { easyUPDATE } from '../../../../utilities/easyFetch';

import '../../../../styles/popups.css';

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
      <h3 className="popup-header">Modifer votre localisation :</h3>
      <input
        className="popup-text"
        type="text"
        onChange={(e) => setNewLocation(e.target.value.toUpperCase())}
      />
      <button
        className="validate-popup cancel"
        onClick={() => updateLocation(false)}
      >
        ANNULER
      </button>
      <button className="validate-popup" onClick={() => changeLocation()}>
        ENREGISTRER
      </button>
    </div>
  );
};

export default ModifyLocation;
