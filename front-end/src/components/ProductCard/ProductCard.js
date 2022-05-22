import React, { useContext } from 'react';
import 'material-icons/iconfont/material-icons.css';
import './ProductCard.css';
import { ProductDataContext } from '../../utilities/Context';

const ProductCard = ({ data, user }) => {
  const { productData } = useContext(ProductDataContext);
  console.log(user);

  const img = productData.find(
    (element) => element.name === data.productName
  ).url;

  return (
    <div className="product-card">
      <div className="product-info">
        <h2>{data.productName}</h2>
        <img alt={'homme jardin'} src={require('./man_salad.png')} />
      </div>
      <img
        style={{ width: '6vw', borderRadius: '10%' }}
        alt={data.productName}
        className="product-picture"
        src={img}
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
