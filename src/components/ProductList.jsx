// src/components/ProductList.js
import React, { useState } from 'react';
import Categories from './Categories';
import Products from './Products';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-list-container">
      <Categories onSelectCategory={handleCategorySelect} />
      <Products category={selectedCategory} />
    </div>
  );
};

export default ProductList;
