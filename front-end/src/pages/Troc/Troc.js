import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Troc.css';

const Troc = () => {
  return (
    <div className="troc-page">
      <div className="troc-info"></div>
      <div className="troc">
        <ProductCard />
      </div>
    </div>
  );
};

export default Troc;
