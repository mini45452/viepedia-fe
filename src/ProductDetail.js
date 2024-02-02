import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const ProductDetail = ({ cart, setCart }) => {
  const location = useLocation();
  const product = location?.state;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    // Check if the quantity is greater than 0 and less than or equal to the stock
    if (quantity > 0 && quantity <= product.stock) {
      const cartItem = {
        ...product,
        quantity,
      };

      setCart([...cart, cartItem]);

      alert(`${quantity} ${product.productName}(s) added to the cart successfully!`);
    } else {
      alert("Invalid quantity or exceeds stock limit.");
    }
  };

  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>ID: {product?.productID}</p>
      <p>Name: {product?.productName}</p>
      <p>Price: {product?.price}</p>
      <p>Stock: {product?.stock}</p>
      <p>Description: {product?.description}</p>
      <img
        src={`data:image/png;base64,${product?.thumbnail}`}
        alt={`Thumbnail of ${product?.productName}`}
        style={{ maxWidth: "150px", maxHeight: "150px" }}
      />
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max={product.stock}
        />
      </label>
      <button onClick={addToCart}>Add to Cart</button>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default ProductDetail;
