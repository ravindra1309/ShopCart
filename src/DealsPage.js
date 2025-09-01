import React from 'react';
import { deals } from './deals';
import './App.css';

export default function DealsPage({ addToCart }) {
  return (
    <section className="deals-section" id="deals">
      <h2 className="deals-title">Hot Deals</h2>
      <div className="deals-grid">
        {deals.map(deal => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.image} alt={deal.name} className="deal-image" />
            <div className="deal-info">
              <h3>{deal.name}</h3>
              <p className="deal-desc">{deal.description}</p>
              <span className="deal-price">{deal.price}</span>
              <span className="deal-old-price">{deal.oldPrice}</span>
              <button className="add-cart-btn" onClick={() => addToCart(deal)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
