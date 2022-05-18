import React, { useState } from 'react';
import SettingsForm from '../../components/formulaires/SettingsForm/SettingsForm';

import ModifyName from '../../components/formulaires/SettingsForm/popUP/ModifyName';
import ModifyEmail from '../../components/formulaires/SettingsForm/popUP/ModifyEmail';
import ModifyLocation from '../../components/formulaires/SettingsForm/popUP/ModifyLocation';
import ModifyPassword from '../../components/formulaires/SettingsForm/popUP/ModifyPassword';
import ReAuthenticate from '../../components/formulaires/SettingsForm/popUP/ReAuthenticate';

import './Settings.css';

const Settings = () => {
  const [upName, updateName] = useState(false);
  const [upEmail, updateEmail] = useState(false);
  const [upLocation, updateLocation] = useState(false);
  const [upPass, updatePass] = useState(false);
  const [ReAuth, setAuth] = useState(false);

  return (
    <div className="settings">
      <SettingsForm
        updateName={updateName}
        updateEmail={updateEmail}
        updateLocation={updateLocation}
        updatePass={updatePass}
      />
      {upName && <ModifyName updateName={updateName} />}
      {upEmail && <ModifyEmail updateEmail={updateEmail} />}
      {upLocation && <ModifyLocation updateLocation={updateLocation} />}
      {upPass && <ModifyPassword updatePass={updatePass} setAuth={setAuth} />}
      {ReAuth && <ReAuthenticate setAuth={setAuth} />}
    </div>
  );
};

export default Settings;
