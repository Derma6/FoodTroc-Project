import React from 'react';

import '../../../styles/forms.css';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

const SettingsForm = () => {
  return (
    <div className="form">
      <h1>Paramètres</h1>
      <SeparatorLessMargin />
      <div className="inputs">
        <label>Modifier mon adresse mail :</label>
        <input type="email" />
        <label>Nouveau mot de passe :</label>
        <input type="password" />
        <label>Confirmer le nouveau mot de passe :</label>
        <input type="password" />
      </div>
      <button className="validate-settings">Valider les modifications</button>
      <button className="delete-account">Supprimer mon compte</button>
    </div>
  );
};

export default SettingsForm;
