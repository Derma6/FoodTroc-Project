import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';
import StockProductCard from '../StockProductCard/StockProductCard';
import 'material-icons/iconfont/material-icons.css';

import './MyStock.css';
import { UserContext } from '../../utilities/Context';
import { useFetch } from '../../utilities/useFetch';

const MyStock = () => {
  const { user } = useContext(UserContext);
  //   const [userStock, setUserStock] = useState();

  console.log(user.stock);

  const { data, isLoading, error } = useFetch(
    `http://localhost:3001/userstocks/${user.uid}`
  );
  const userStock = user.stock;

  // console.log(isLoading);
  // console.log(userStock);

  // console.log(userStock);

  //   userStock.map((data) => console.log(data));

  return (
    <div className="my-stock">
      <h1>Bonjour {user && user.name}, voici votre stock</h1>
      <SeparatorLessMargin />
      <div className="stock-products">
        {isLoading ? (
          <p>En cours de chargement</p>
        ) : (
          userStock.map((data) => {
            console.log(data.productName);
          })
        )}
      </div>
      <button className="material-icons add-btn">
        <Link to="/stock/add">add</Link>
      </button>
    </div>
  );
};

export default MyStock;
