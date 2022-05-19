import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';
import StockProductCard from '../StockProductCard/StockProductCard'
import 'material-icons/iconfont/material-icons.css';

import './MyStock.css'
import { UserContext } from '../../utilities/Context';

const MyStock = () => {

    const { user } = useContext(UserContext)
    const [userStock, setUserStock ]  = useState()

    async function getUserStock(uid) {
        const response = await fetch(`http://localhost:3001/userstocks/${uid}`);
        const data = await response.json();
        setUserStock({ ...data });
    }
    
    return (
        <div className="my-stock">
            <h1>Bonjour {user.name}, voici votre stock</h1>
            <SeparatorLessMargin />
            <div className="stock-products">
 
                {userStock.map((stock)=>{
                    < StockProductCard stock={stock}/>
                })}
            </div>


                {/* <StockProductCard />
                <StockProductCard />
                <StockProductCard />
                <StockProductCard />
            </div> */}
            <button className="material-icons add-btn">
                <Link to="/stock/add">
                    add
                </Link>
            </button>
        </div>
    );
};

export default MyStock;