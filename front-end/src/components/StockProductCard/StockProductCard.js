import React from 'react';
import './StockProductCard.css';
import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';

const StockProductCard = ({ data }) => {
  return (
    <div className="stock-card">
      <div className="stock-info">
        <h2>{data.productName}</h2>
        <SeparatorLessMargin />
      </div>
      <img
        alt={data.productName}
        className="product-picture"
        src={`https://i.ibb.co/KhxnRjn/fraise.jpg`}
      />
    </div>
  );
};

export default StockProductCard;
