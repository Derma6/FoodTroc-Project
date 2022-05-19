import React, { useContext } from 'react';

import '../../../styles/forms.css';
import './SettingsForm.css';

import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import { UserContext } from '../../../utilities/Context';

const SettingsForm = ({
  updateName,
  updateEmailLoc,
  updateLocation,
  updatePass,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="form">
      <h1>Paramètres</h1>
      <SeparatorLessMargin />

      <div className="container">
        <span className="settings-category">Prénom : </span>
        <span>{user.name}</span>
        <button className="modify-button" onClick={() => updateName(true)}>
          Modifier
        </button>
      </div>
      <div className="container">
        <span className="settings-category">Email : </span>
        <span>{user.email}</span>
        <button className="modify-button" onClick={() => updateEmailLoc(true)}>
          Modifier
        </button>
      </div>
      <div className="container">
        <span className="settings-category">Localisation : </span>
        <span>{user.location}</span>
        <button className="modify-button" onClick={() => updateLocation(true)}>
          Modifier
        </button>
      </div>
      <button className="password" onClick={() => updatePass(true)}>
        MODIFIER MOT DE PASSE
      </button>
      {/* <div className="inputs">
        <label>Modifier mon adresse mail :</label>
        <input type="email" />
        <label>Nouveau mot de passe :</label>
        <input type="password" />
        <label>Confirmer le nouveau mot de passe :</label>
        <input type="password" />
      </div> */}
      {/* <button className="validate-settings">Valider les modifications</button> */}
      <button className="delete-account">SUPPRIMER MON COMPTE</button>
    </div>
  );
};

export default SettingsForm;
