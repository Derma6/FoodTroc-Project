import React, { useContext } from 'react';
import './StockProductCard.css';
import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';
import { ProductDataContext } from '../../utilities/Context';

const StockProductCard = ({ data }) => {
  const { productData } = useContext(ProductDataContext);

  const img = productData.find(
    (element) => element.name === data.productName
  ).url;

  return (
    <div className="stock-card">
      <div className="stock-info">
        <h2>{data.productName}</h2>
        <SeparatorLessMargin />
      </div>
      <img alt={data.productName} className="product-picture" src={img} />
    </div>
  );
};

export default StockProductCard;
