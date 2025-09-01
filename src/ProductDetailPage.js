import React, { useState } from 'react';
import { products } from './products';
import './App.css';
import { useParams } from 'react-router-dom';

const productImages = {
  1: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  ],
  2: [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  ],
  // ...add more for other products
};

const reviewsData = {
  1: [
    { user: 'Alice', comment: 'Great sound quality!' },
    { user: 'Bob', comment: 'Battery lasts long.' }
  ],
  2: [
    { user: 'Charlie', comment: 'Very stylish and useful.' },
    { user: 'Dana', comment: 'Tracks my fitness perfectly.' }
  ],
  // ...add more for other products
};

export default function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail-main product-detail-amazon-style">
      <div className="product-detail-amazon-container">
        <div className="product-detail-amazon-image">
          <img src={product.image} alt={product.name} className="product-detail-amazon-img" />
        </div>
        <div className="product-detail-amazon-info">
          <h1 className="product-detail-amazon-title">{product.name}</h1>
          <p className="product-detail-amazon-desc">{product.description}</p>
          <div className="product-detail-amazon-pricing">
            <span className="product-detail-amazon-discount">-76%</span>
            <span className="product-detail-amazon-price">₹2,199</span>
            <span className="product-detail-amazon-mrp">M.R.P.: <s>₹8,999</s></span>
          </div>
          <button className="product-detail-amazon-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
