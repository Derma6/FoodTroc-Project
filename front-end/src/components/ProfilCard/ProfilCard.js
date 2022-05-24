import React, { useContext } from 'react';
import { ProductDataContext, UserContext } from '../../utilities/Context';

import SeparatorMenu from '../SeparatorMenu/SeparatorMenu';

import img from './pointer.png';

import './ProfilCard.css';

const ProfilCard = ({ troqueur, research }) => {
  const { user } = useContext(UserContext);
  const { productData } = useContext(ProductDataContext);

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
          <span>{troqueur.location}</span>
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
          <button className="contact-btn">
            CONTACTER {troqueur.name.toUpperCase()}
          </button>
          <button className="show-me-btn">VOIR SON JARDIN</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilCard;
