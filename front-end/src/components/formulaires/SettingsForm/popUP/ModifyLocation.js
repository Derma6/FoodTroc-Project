import React, { useState } from 'react';

import './PopUp.css';

const ModifyLocation = ({ updateLocation }) => {
  const [newLocation, setNewLocation] = useState();

  return (
    <div className="pop-up">
      <h3>Modifer votre email :</h3>
      <input type="text" onChange={(e) => setNewLocation(e.target.value)} />
      <button onClick={() => updateLocation(false)}>ANNULER</button>
      <button>ENREGISTRER</button>
    </div>
  );
};

export default ModifyLocation;
