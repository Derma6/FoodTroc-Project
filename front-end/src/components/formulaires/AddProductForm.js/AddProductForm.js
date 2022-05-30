import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';
import { ProductDataContext, UserContext } from '../../../utilities/Context';
import { easyUPDATE } from '../../../utilities/easyFetch';

const AddProductForm = () => {
  const { productData } = useContext(ProductDataContext);
  const { user, updateUser } = useContext(UserContext);

  const [productName, setProductName] = useState();
  const [freshness, setFreshness] = useState();
  const [quantity, setQuantity] = useState();
  const [quantityText, setQuantityText] = useState();
  const [quantityType, setQuantityType] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  function addProduct() {
    const newProduct = {
      productName,
      freshness,
      quantity,
      description,
      id: user.stock.length + 1,
    };

    updateUser({ ...user, stock: [...user.stock, newProduct] });

    easyUPDATE(
      { stock: [...user.stock, newProduct] },
      `http://localhost:3001/users/${user.uid}`,
      user.token
    ).then(() => navigate('/stock', { replace: true }));
  }

  return (
    <div className="form">
      <h1 className="add-h1">AJOUTER UN PRODUIT</h1>
      <SeparatorLessMargin />
      <div className="inputs">
        <select
          className="select-product select-form"
          label="Produit"
          onChange={(e) => setProductName(e.target.value)}
        >
          <option value="select">SELECTIONNEZ UN PRODUIT</option>
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
          <option value="select">FRAICHEUR</option>
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
            placeholder="QUANTITÉ"
          />
          <select
            onChange={(e) => {
              setQuantityType(e.target.value);
              setQuantity(`${quantityText} ${e.target.value}`);
            }}
            className="quantity-type select-form"
            label="quantityType"
          >
            <option value="selectType">Type</option>
            <option value="Kilo(s)">Kilo(s)</option>
            <option value="Grammes">Grammes</option>
            <option value="Unité(s)">Unité(s)</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <textarea
          rows="10"
          placeholder="DESCRIPTION DU PRODUIT"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <button
        className="validate-form"
        onClick={() => {
          addProduct();
        }}
      >
        AJOUTER
      </button>
    </div>
  );
};

export default AddProductForm;
