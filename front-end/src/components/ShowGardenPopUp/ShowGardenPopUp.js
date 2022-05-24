import React, { useContext } from 'react';

import './ShowGardenPopUp.css';
import pointer from '../../styles/images/pointer.png';
import letter from '../../styles/images/letter.png';

import { ProductDataContext } from '../../utilities/Context';

const ShowGardenPopUp = ({ troqueur, showGarden }) => {
  const { productData } = useContext(ProductDataContext);

  return (
    <div className="pop-up-garden">
      <div className="pop-up-garden-header">
        <button onClick={() => showGarden(false)}>RETOUR</button>
        <h2>Bienvenue sur le potager de {troqueur.name}</h2>
        <div className="pop-up-garden-contact-container">
          <div className="location-container">
            <img src={pointer} alt="logo localisation" width={'24px'} />
            <span className="profil-card-location">{troqueur.location}</span>
          </div>
          <div className="location-container">
            <img src={letter} alt="logo lettre" width={'24px'} />
            <span className="profil-card-location">{troqueur.email}</span>
          </div>
        </div>
      </div>
      <div className="pop-up-garden-stock-container">
        {troqueur.stock.map((product) => (
          <div key={Math.random()} className="pop-up-garden-product-container">
            <h3>{product.productName}</h3>
            <img
              src={
                productData.find(
                  (element) => element.name === product.productName
                ).url
              }
              alt={product.productName}
              width={'100px'}
              height={'70px'}
              className="product-img"
            />
            <div className="pop-up-garden-product-description">
              <p>
                Quantité disponible : <br />
                <span>{product.quantity}</span>
              </p>
              <p>
                Fraicheur du produit : <br />
                <span>{product.freshness}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowGardenPopUp;
