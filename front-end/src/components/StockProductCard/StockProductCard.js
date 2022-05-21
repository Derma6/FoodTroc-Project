import React, { useContext, useState } from 'react';
import { ProductDataContext, UserContext } from '../../utilities/Context';
import { easyUPDATE } from '../../utilities/easyFetch';

import './StockProductCard.css';
import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';
import 'material-icons/iconfont/material-icons.css';

const StockProductCard = ({ data }) => {
  const { productData } = useContext(ProductDataContext);
  const { user, updateUser } = useContext(UserContext);

  const [ask, popAsk] = useState();

  const img = productData.find(
    (element) => element.name === data.productName
  ).url;

  function deleteProduct() {
    const newStock = user.stock.filter((element) => element.id !== data.id);

    updateUser({ ...user, stock: newStock });
    easyUPDATE(
      { uid: user.uid, stock: newStock },
      `http://localhost:3001/users/${user.uid}`,
      user.token
    );
  }

  return (
    <div className="stock-card">
      {ask ? (
        <div className="confirm-delete-product">
          <p>Etes-vous sur ?</p>
          <button className="validate-delete" onClick={() => popAsk(false)}>Non</button>
          <button className="validate-delete" onClick={() => deleteProduct()}>Oui</button>
        </div>
      ) : (
        <>
          <div className="stock-info">
            <h2>{data.productName}</h2>
            <button className="delete-product material-icons" onClick={() => popAsk(true)}>clear</button>
          </div>
          <SeparatorLessMargin />
          <img alt={data.productName} className="product-picture" src={img} />
        </>
      )}
    </div>
  );
};

export default StockProductCard;
