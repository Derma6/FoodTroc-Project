import React, { useContext, useState } from 'react';
import './StockProductCard.css';
import SeparatorLessMargin from '../SeparatorLessMargin/SeparatorLessMargin';
import { ProductDataContext, UserContext } from '../../utilities/Context';
import { easyUPDATE } from '../../utilities/easyFetch';

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
        <>
          <p>Etes-vous sur ?</p>
          <button onClick={() => popAsk(false)}>Non</button>
          <button onClick={() => deleteProduct()}>Oui</button>
        </>
      ) : (
        <>
          <div className="stock-info">
            <h2>{data.productName}</h2>
            <SeparatorLessMargin />
          </div>
          <button onClick={() => popAsk(true)}>X</button>
          <img alt={data.productName} className="product-picture" src={img} />
        </>
      )}
    </div>
  );
};

export default StockProductCard;
