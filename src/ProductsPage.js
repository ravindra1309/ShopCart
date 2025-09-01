import React from 'react';
import { products } from './products';
import './App.css';

export default function ProductsPage({ addToCart }) {
  return (
    <section className="products-section" id="products">
      <h2 className="products-title">Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <span className="product-price">{product.price}</span>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
