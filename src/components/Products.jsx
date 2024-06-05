// src/components/Products.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        setLoading(true);
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
