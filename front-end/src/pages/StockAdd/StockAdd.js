import React from 'react';
import AddProductForm from '../../components/formulaires/AddProductForm.js/AddProductForm';
import { redirect } from '../../utilities/redirect';

import './StockAdd.css';

const StockAdd = () => {
  redirect('/');

  return (
    <div className="stock-add">
      <AddProductForm />
    </div>
  );
};

export default StockAdd;
