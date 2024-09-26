// npx create-react-app product-card-app
// cd product-card-app
// npm start

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';  

const ProductCardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);  
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <div className="card-info">
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description.slice(0, 100)}...</p> {/* Truncate description */}
      </div>
    </div>
  );
};

import React from 'react';
import './App.css';
import ProductCardList from './components/ProductCardList';  

function App() {
  return (
    <div className="App">
      <h1>Product Card List</h1>
      <ProductCardList />
    </div>
  );
}

export default App;

const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((error) => {
      setError('Failed to load products');
      setLoading(false);
    });
}, []);

if (error) {
  return <p>{error}</p>;  
}
