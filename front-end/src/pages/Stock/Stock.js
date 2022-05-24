import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SeparatorLessMargin from '../../components/SeparatorLessMargin/SeparatorLessMargin';
import { UserContext } from '../../utilities/Context';
import { useFetch } from '../../utilities/useFetch';
import StockProductCard from '../../components/StockProductCard/StockProductCard';
import 'material-icons/iconfont/material-icons.css';

//--------------------IMPORT CSS--------------------//
import './Stock.css';

const Stock = () => {

  useEffect(() => {
    document.title = "Mon stock - FoodTroc";  
  }, []);

  const { user } = useContext(UserContext);
  const isDataLoading = false;

  return (
    <main className="stock">
      <div className="my-stock">
        <h1>Bonjour {user && user.name}, voici votre stock</h1>
        <SeparatorLessMargin />
        <div className="stock-products">
          {isDataLoading ? (
            <p>En cours de chargement</p>
          ) : user.stock.length === 0 ? (
            <p>Rien à proposer dans votre jardin !</p>
          ) : (
            user.stock.map((element) => (
              <StockProductCard key={element.id} data={element} />
            ))
          )}
        </div>
        <button className="add-btn">
          <Link to="/stock/add">+</Link>
        </button>
      </div>
    </main>
  );
};

export default Stock;
