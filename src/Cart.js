import React from "react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (item, newQuantity) => {
    updateQuantity(item, newQuantity);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  // Calculate the subtotal for each item
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // Calculate the total cost for all items in the cart
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.productID}>
                {item.productName} - ${item.price} | Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item, parseInt(e.target.value, 10))
                  }
                  min="1"
                  max={item.stock}
                />
                Subtotal: ${calculateSubtotal(item)}
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <p>Total Cost: ${calculateTotalCost()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
