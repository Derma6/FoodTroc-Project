import React from 'react';
import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';
import StockProductCard from '../StockProductCard/StockProductCard'

import './MyStock.css'

const MyStock = () => {
    return (
        <div className="my-stock">
            <h1>Bonjour Robert, voici votre stock</h1>
            <SeparatorLessMargin />
            <div className="stock-products">
                <StockProductCard />
                <StockProductCard />
                <StockProductCard />
                <StockProductCard />
            </div>
        </div>
    );
};

export default MyStock;