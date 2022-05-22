import React, { useContext } from 'react';
import { UserContext } from '../../utilities/Context';

import './ProfilCard.css';

const ProfilCard = ({ troqueur }) => {
  const { user } = useContext(UserContext);

  if (user.uid === troqueur.uid) return;

  return (
    <div className="profil-card">
      <h2>{troqueur.name}</h2>

      {troqueur.stock.map((product) => (
        <p>
          {product.productName}, {product.quantity}
        </p>
      ))}
    </div>
  );
};

export default ProfilCard;
