import React, { useContext } from 'react';
import { UserContext } from '../../../../utilities/Context';
import { easyDELETE } from '../../../../utilities/easyFetch';
import { auth, deleteUser } from '../../../../utilities/firebase';

import '../../../../styles/popups.css';
import 'material-icons/iconfont/material-icons.css';

const DeleteAccount = ({ popDelete, setAuth }) => {
  const { user, updateUser } = useContext(UserContext);

  function delAccount() {
    easyDELETE({}, `http://localhost:3001/users/${user.uid}`, user.token).then(
      () => {
        deleteUser(auth.currentUser)
          .then(() => {
            updateUser(null);
            popDelete(false);
          })
          .catch((error) => {
            setAuth(true);
          });
      }
    );
  }
  return (
    <div className="pop-up-delete">
      <h3 className="popup-header">Êtes-vous sur de vouloir supprimer votre compte ?</h3>
      <p style={{display: "flex"}} className="confirm-delete">
        <span style={{marginRight: "3%", fontSize: "2.5em"}} className="material-icons">warning</span>
        Cette action est irréversible et entrainera la suppression de vos
        données.
      </p>
      <button className="validate-popup cancel" onClick={() => popDelete(false)}>ANNULER</button>
      <button className="validate-popup" onClick={() => delAccount()}>CONFIRMER</button>
    </div>
  );
};

export default DeleteAccount;
