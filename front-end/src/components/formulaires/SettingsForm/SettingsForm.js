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
  popDelete,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="form">
      <h1>Paramètres</h1>
      <SeparatorLessMargin />
      <div className="container">
        <span className="settings-category">Prénom : </span>
        <span className="user-setting-entry">{user.name}</span>
        <button className="modify-button" onClick={() => updateName(true)}>
          Modifier
        </button>
      </div>
      <div className="container">
        <span className="settings-category">Email : </span>
        <span className="user-setting-entry">{user.email}</span>
        <button className="modify-button" onClick={() => updateEmailLoc(true)}>
          Modifier
        </button>
      </div>
      <div className="container">
        <span className="settings-category">Localisation : </span>
        <span className="user-setting-entry">{user.location}</span>
        <button className="modify-button" onClick={() => updateLocation(true)}>
          Modifier
        </button>
      </div>
      <button className="password" onClick={() => updatePass(true)}>
        MODIFIER MOT DE PASSE
      </button>
      <button className="delete-account" onClick={() => popDelete(true)}>
        SUPPRIMER MON COMPTE
      </button>
    </div>
  );
};

export default SettingsForm;
