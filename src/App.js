// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart"
import ProductDetail from "./ProductDetail";

const App = () => {
  const [cart, setCart] = useState([]);

  const updateQuantity = (updatedItem, newQuantity) => {
    // Create a new array with updated quantity for the specific item
    const updatedCart = cart.map(item =>
      item.productID === updatedItem.productID
        ? { ...item, quantity: newQuantity }
        : item
    );

    setCart(updatedCart);
  };

  const removeFromCart = (itemToRemove) => {
    // Filter out the item to remove from the cart
    const updatedCart = cart.filter(item => item.productID !== itemToRemove.productID);

    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-detail/:productId" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
