import React from 'react';
import './StockProductCard.css'
import SeparatorLessMargin from'../SeparatorLessMargin/SeparatorLessMargin'

const StockProductCard = () => {
    return (
        <div className="stock-card">
            <div className="stock-info">
                <h2>ABRICOTS</h2>
                <SeparatorLessMargin />
            </div>
            <img
                alt={'abricots'}
                className="product-picture"
                src={require('../../styles/images/photo_tomates.jpg')}
            />
        </div>
    );
};

export default StockProductCard;