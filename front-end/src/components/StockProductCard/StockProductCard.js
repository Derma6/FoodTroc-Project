import React, { useContext, useState, useEffect } from 'react';
import { ProductDataContext, UserContext } from '../../utilities/Context';
import { easyUPDATE } from '../../utilities/easyFetch';

import './StockProductCard.css';
import EditProductCard from '../formulaires/SettingsForm/popUP/EditProductCard';
import SeparatorWide from '../SeparatorWide/SeparatorWide';
import 'material-icons/iconfont/material-icons.css';

const StockProductCard = ({ data }) => {
  const { productData } = useContext(ProductDataContext);
  const { user, updateUser } = useContext(UserContext);

  const [ask, popAsk] = useState();
  const [askEdit, setAskEdit] = useState();

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
      {askEdit && <EditProductCard data={data} setAskEdit={setAskEdit} />}
      {ask ? (
        <div className="confirm-delete-product">
          <p>Etes-vous sur ?</p>
          <button className="validate-delete" onClick={() => popAsk(false)}>
            Non
          </button>
          <button className="validate-delete" onClick={() => deleteProduct()}>
            Oui
          </button>
        </div>
      ) : (
        <>
          <div className="stock-card-header">
            <div className="stock-info">
              <h3>{data.productName}</h3>
              <p>{data.quantity}</p>
            </div>
            <div className="edit-product">
              <button
                className="product-btn material-icons"
                onClick={() => popAsk(true)}
              >
                delete
              </button>
              <button
                onClick={() => {
                  setAskEdit(true);
                }}
                className="product-btn material-icons"
              >
                edit
              </button>
            </div>
          </div>
          <SeparatorWide />
          <img alt={data.productName} className="product-picture" src={img} />
        </>
      )}
    </div>
  );
};

export default StockProductCard;
