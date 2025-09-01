import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import DealsPage from './DealsPage';
import CartPage from './CartPage';
import ContactPage from './ContactPage';
import { products } from './products';
import ProductDetailPage from './ProductDetailPage';

function HomeCarousel({ products }) {
  const [current, setCurrent] = useState(0);
  const total = products.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => setCurrent(idx);
  const product = products[current];

  return (
    <div className="carousel-overlay">
      <header className="home-header shop-header">
        <h1>Welcome to ShopCart</h1>
        <p>Your one-stop shop for amazing products and deals!</p>
        <div className="home-links">
          <Link className="home-link-btn" to="/products">Go to Products</Link>
          <Link className="home-link-btn" to="/deals">View Deals</Link>
          <Link className="home-link-btn" to="/cart">View Cart</Link>
          <Link className="home-link-btn" to="/contact">Contact Us</Link>
        </div>
      </header>
      <section className="carousel-grid-section">
        <h2 className="carousel-title">Featured Products</h2>
        <div className="carousel-grid">
          {products.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="carousel-grid-item-link">
              <div className="carousel-grid-item">
                <img src={product.image} alt={product.name} className="carousel-grid-image" />
                <div className="carousel-grid-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="carousel-grid-price">{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const found = prevCart.find((i) => i.id === item.id);
      if (found) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const found = prevCart.find((i) => i.id === id);
      if (found && found.quantity > 1) {
        return prevCart.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevCart.filter((i) => i.id !== id);
    });
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar shop-navbar">
          <div className="navbar-logo shop-logo">
            <Link to="/home" className="navbar-home-link">
              <span className="cart-icon">🛒</span> ShopCart
            </Link>
          </div>
          <ul className="navbar-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<HomeCarousel products={products} />} />
            <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/deals" element={<DealsPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
