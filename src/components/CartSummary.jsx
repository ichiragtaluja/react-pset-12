import React, { useState } from "react";
import { useCartTotal } from "../contexts/CartTotalContext";

export const CartSummary = () => {
  const { items } = useCartTotal();

  const [cartProducts, setCartProducts] = useState([]);

  const addToCartHandler = (product) => {
    const isProductPresent = cartProducts.find(({ id }) => id === product.id);

    !isProductPresent
      ? setCartProducts([...cartProducts, { ...product, qty: 1 }])
      : setCartProducts(
          cartProducts.map((item) =>
            item.id !== product.id ? item : { ...item, qty: item.qty + 1 }
          )
        );
  };

  const removeHandler = (productId) =>
    setCartProducts(cartProducts.filter((product) => product.id !== productId));

  return (
    <div>
      <h1>Question 4</h1>
      <div className="container">
        <h3>Available Items</h3>
        <div className="cart-items">
          <h3>Cart Total: ${"0.00"}</h3>
          <ul>
            {cartProducts.map(({ name, id, qty, price }) => (
              <li>
                <span>
                  {name} - ${price} Quantity: {qty}{" "}
                </span>
                <button onClick={() => removeHandler(id)} key={id}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {items.map((product) => {
            const { id, name, price } = product;
            return (
              <li key={id}>
                <span>
                  {name} - ${price}{" "}
                </span>
                <button onClick={() => addToCartHandler(product)}>
                  Add to Cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
