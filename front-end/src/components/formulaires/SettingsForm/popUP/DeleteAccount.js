import React, { useContext } from 'react';
import { UserContext } from '../../../../utilities/Context';
import { easyDELETE } from '../../../../utilities/easyFetch';
import { auth, deleteUser } from '../../../../utilities/firebase';

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
    <div className="pop-up">
      <h3>Ëtes-vous sur de vouloir supprimer votre compte ?</h3>
      <p>
        Cette action est irréversible et entrainera la suppression de vos
        données.
      </p>
      <button onClick={() => popDelete(false)}>ANNULER</button>
      <button onClick={() => delAccount()}>CONFIRMER</button>
    </div>
  );
};

export default DeleteAccount;
