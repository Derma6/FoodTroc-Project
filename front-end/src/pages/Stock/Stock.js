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
  const { user } = useContext(UserContext);

  const [userStock, setUserStock] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setUserStock(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }

    fetchData(`http://localhost:3001/userstocks/${user.uid}`);
  }, []);

  return (
    <main className="stock">
      <div className="my-stock">
        <h1>Bonjour {user && user.name}, voici votre stock</h1>
        <SeparatorLessMargin />
        <div className="stock-products">
          {isDataLoading ? (
            <p>En cours de chargement</p>
          ) : (
            userStock.stock.map((element) => (
              <StockProductCard key={element._id} data={element} />
            ))
          )}
        </div>
        <button className="material-icons add-btn">
          <Link to="/stock/add">add</Link>
        </button>
      </div>
    </main>
  );
};

export default Stock;
