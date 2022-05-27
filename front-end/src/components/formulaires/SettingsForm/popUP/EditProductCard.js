import React, { useContext, useState } from 'react';
import { UserContext, ProductDataContext } from '../../../../utilities/Context';

import '../../../../styles/popups.css';
import 'material-icons/iconfont/material-icons.css';

const EditProductCard = ({setAskEdit, data}) => {
  const { user, updateUser } = useContext(UserContext);
  const { productData } = useContext(ProductDataContext);

  const [productName, setProductName] = useState();
  const [freshness, setFreshness] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [quantityText, setQuantityText] = useState();
  const [quantityType, setQuantityType] = useState()


  const editProduct = {

  }


  return (
    <div className="pop-up-edit ">
      <h1 style={{textAlign: 'center'}} className="add-h1">MODIFIER LE PRODUIT</h1>
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
            onClick={(e) => setQuantityText(e.target.value)}
            className="quantity-text"
            id="object"
            placeholder="QUANTITÉ"
            value={data.quantity}
          />
          <select
            onClick={(e) => setQuantityType(e.target.value)}
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
          value={data.description}
          contentEditable="true"
        ></textarea>
      <div className="popup-edit-buttons">
        <button className="validate-popup cancel" onClick={() => {
          setAskEdit(false)
        }}>ANNULER</button>
        <button style={{marginTop: "5%"}} className="validate-popup" onClick={() => {
          setQuantity(`${quantityText} ${quantityType}`)
          setAskEdit(false)
        }}>CONFIRMER</button>
      </div>
    </div>
  );
};

export default EditProductCard;