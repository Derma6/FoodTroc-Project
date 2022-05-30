import React, { useContext, useState } from 'react';
import { UserContext, ProductDataContext } from '../../../../utilities/Context';

import '../../../../styles/popups.css';
import 'material-icons/iconfont/material-icons.css';
import { easyUPDATE } from '../../../../utilities/easyFetch';

const EditProductCard = ({ setAskEdit, data }) => {
  const { user, updateUser } = useContext(UserContext);
  const { productData } = useContext(ProductDataContext);

  const [productName, setProductName] = useState(data.productName);
  const [freshness, setFreshness] = useState(data.freshness);
  const [quantity, setQuantity] = useState(data.quantity);
  const [description, setDescription] = useState(data.description);
  const [quantityText, setQuantityText] = useState();
  const [quantityType, setQuantityType] = useState();

  function editProduct() {
    const editProduct = {
      productName,
      freshness,
      quantity,
      description,
      id: data.id,
    };

    const productIndex = user.stock.indexOf(data);

    const productStock = user.stock.slice();

    productStock[productIndex] = editProduct;

    updateUser({ ...user, stock: productStock });
    easyUPDATE(
      { uid: user.uid, stock: productStock },
      `http://localhost:3001/users/${user.uid}`,
      user.token
    );
  }

  return (
    <div className="pop-up-edit ">
      <h1 style={{ textAlign: 'center' }} className="add-h1">
        MODIFIER LE PRODUIT
      </h1>
      <select
        className="select-product select-form"
        label="Produit"
        onChange={(e) => setProductName(e.target.value)}
      >
        <option value="select">{data.productName}</option>
        {productData.map((element) => (
          <option key={element.id} value={element.name}>
            {element.name}
          </option>
        ))}
      </select>
      <select
        className="select-form"
        label="freshness"
        onChange={(e) => setFreshness(e.target.value)}
      >
        <option value="select">{data.freshness}</option>
        <option value="Frais">Frais</option>
        <option value="Normal">Normal</option>
        <option value="Dépêchez-vous !">Dépêchez-vous !</option>
      </select>
      <div className="quantity">
        <input
          onChange={(e) => {
            setQuantityText(e.target.value);
            setQuantity(`${e.target.value} ${quantityType}`);
          }}
          className="quantity-text"
          id="object"
          placeholder={data.quantity.split(' ')[0]}
        />
        <select
          onChange={(e) => {
            setQuantityType(e.target.value);
            setQuantity(`${quantityText} ${e.target.value}`);
          }}
          className="quantity-type select-form"
          label="quantityType"
        >
          <option value={data.quantity.split(' ')[1]}>
            {data.quantity.split(' ')[1]}
          </option>
          <option value="Kilo(s)">Kilo(s)</option>
          <option value="Grammes">Grammes</option>
          <option value="Unité(s)">Unité(s)</option>
          <option value="Autre">Autre</option>
        </select>
      </div>
      <textarea
        rows="10"
        placeholder={data.description}
        onChange={(e) => setDescription(e.target.value)}
        contentEditable="true"
      ></textarea>
      <div className="popup-edit-buttons">
        <button
          className="validate-popup cancel"
          onClick={() => {
            setAskEdit(false);
          }}
        >
          ANNULER
        </button>
        <button
          style={{ marginTop: '5%' }}
          className="validate-popup"
          onClick={() => {
            editProduct();
            setAskEdit(false);
          }}
        >
          CONFIRMER
        </button>
      </div>
    </div>
  );
};

export default EditProductCard;
