import React from 'react';
import { Link } from 'react-router-dom';

import './AddProductForm.css'
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin'


const AddProductForm = () => {
  return (
    <div className="form">
      <h1 className="add-h1">AJOUTER UN PRODUIT</h1>
      <SeparatorLessMargin />
      <div  className="inputs">
          <select className="select-product" label="Produit">
            <option value="select">SELECTIONNEZ UN PRODUIT</option>
            <option value="Tomates">Tomates</option>
            <option value="Carrotes">Carrotes</option>
            <option value="Pomme de terre">Pommes de terre</option>
          </select>
          <select label="freshness">
            <option value="select">FRAICHEUR</option>
            <option value="fresh">Frais</option>
            <option value="good">Normal</option>
            <option value="soon">Dépêchez-vous !</option>
          </select>
          <input id="object" placeholder="QUANTITÉ" variant="outlined" />
          <textarea rows="10" placeholder="DESCRIPTION DU PRODUIT"></textarea>
      </div>

      <button className="validate-form">
      <Link to="/stock">
                    AJOUTER
                </Link>
      </button>
    </div>
  );
};

export default AddProductForm;
