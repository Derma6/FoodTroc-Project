import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-info">
        <h2>ABRICOTS</h2>
        <img alt={'homme jardin'} src={require('./man_salad.png')} />
      </div>
      <img
        style={{ width: '6vw', borderRadius: '10%' }}
        alt={'abricots'}
        className="product-picture"
        src={require('./Abricot-bienfaits.jpg')}
      />
      <div className="product-footer">
        <div className="location">
          <span className="material-icons">place</span>
          <p>Beauvais</p>
        </div>
        <button>RESERVER</button>
      </div>
    </div>
  );
};

export default ProductCard;
