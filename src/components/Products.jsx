import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ item, onEdit }) => {
  return (
    <div className="products-container">
     
      <ProductCard product={item} onEdit={onEdit} />
    </div>
  );
};


export default Products;