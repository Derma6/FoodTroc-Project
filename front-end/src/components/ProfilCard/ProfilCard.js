import React, { useContext, useState } from 'react';
import { ProductDataContext, UserContext } from '../../utilities/Context';

import ShowGardenPopUp from '../ShowGardenPopUp/ShowGardenPopUp';

import img from '../../styles/images/pointer.png';

import './ProfilCard.css';

const ProfilCard = ({ troqueur, research }) => {
  const { user } = useContext(UserContext);
  const { productData } = useContext(ProductDataContext);

  const [popGarden, showGarden] = useState(false);

  if (user.uid === troqueur.uid) return;

  const tab = troqueur.stock.filter((s) => s.productName.includes(research));

  if ((research && tab.length === 0) || troqueur.stock.length === 0) return;

  return (
    <div className="profil-card">
      <div className="info-container">
        <h2 className="troqueur-name">
          LE POTAGER DE {troqueur.name.toUpperCase()}
        </h2>
        <div className="location-container">
          <img src={img} alt="logo localisation" width={'24px'} />
          <p className="profil-card-location">{troqueur.location}</p>
        </div>
      </div>
      <div className="product">
        {troqueur.stock.map(
          (product, index) =>
            index < 6 && (
              <div className="product-container">
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

                <p>{product.productName}</p>
              </div>
            )
        )}
      </div>
      <div className="profil-card-contact-container">
        {troqueur.stock.length > 6 && <p>...et bien plus !</p>}
        <div className="profil-card-btn">
          <button
            className="contact-btn"
            onClick={() => (window.location = `mailto:${troqueur.email}`)}
          >
            CONTACTER {troqueur.name.toUpperCase()}
          </button>
          <button className="show-me-btn" onClick={() => showGarden(true)}>
            VOIR SON JARDIN
          </button>
        </div>
      </div>

      {popGarden && (
        <ShowGardenPopUp showGarden={showGarden} troqueur={troqueur} />
      )}
    </div>
  );
};

export default ProfilCard;
