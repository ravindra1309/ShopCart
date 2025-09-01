import React from 'react';
import './App.css';

export default function CartPage({ cart, removeFromCart }) {
  // Helper to parse price string like "$59.99" to number
  const parsePrice = (price) => Number(price.replace(/[^\d.]/g, ""));
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  return (
    <section className="cart-section" id="cart">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-qty">x{item.quantity}</span>
                <span className="cart-item-price">{item.price}</span>
                <button className="remove-cart-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: </strong>
            <span className="cart-total-price">${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </section>
  );
}
