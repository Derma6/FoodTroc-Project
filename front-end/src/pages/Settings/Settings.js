import React, { useState } from 'react';
import SettingsForm from '../../components/formulaires/SettingsForm/SettingsForm';

import ModifyName from '../../components/formulaires/SettingsForm/popUP/ModifyName';
import ModifyEmail from '../../components/formulaires/SettingsForm/popUP/ModifyEmail';
import ModifyLocation from '../../components/formulaires/SettingsForm/popUP/ModifyLocation';
import ModifyPassword from '../../components/formulaires/SettingsForm/popUP/ModifyPassword';
import ReAuthenticate from '../../components/formulaires/SettingsForm/popUP/ReAuthenticate';
import DeleteAccount from '../../components/formulaires/SettingsForm/popUP/DeleteAccount';

import './Settings.css';

import { auth, onAuthStateChanged } from '../../utilities/firebase';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate('/', { replace: true });
    }
  });

  const [upName, updateName] = useState(false);
  const [upEmail, updateEmailLoc] = useState(false);
  const [upLocation, updateLocation] = useState(false);
  const [upPass, updatePass] = useState(false);
  const [ReAuth, setAuth] = useState(false);
  const [DeleteA, popDelete] = useState(false);

  return (
    <div className="settings">
      <SettingsForm
        updateName={updateName}
        updateEmailLoc={updateEmailLoc}
        updateLocation={updateLocation}
        updatePass={updatePass}
        popDelete={popDelete}
      />
      {upName && <ModifyName updateName={updateName} />}
      {upEmail && <ModifyEmail updateEmailLoc={updateEmailLoc} />}
      {upLocation && <ModifyLocation updateLocation={updateLocation} />}
      {upPass && <ModifyPassword updatePass={updatePass} setAuth={setAuth} />}
      {DeleteA && <DeleteAccount popDelete={popDelete} setAuth={setAuth} />}
      {ReAuth && <ReAuthenticate setAuth={setAuth} />}
    </div>
  );
};

export default Settings;
