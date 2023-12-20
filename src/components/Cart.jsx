import React from 'react'

const Cart = ({ cart, totalPrice }) => {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              Label: {item.label}
              <br />
              Type: {item.type}
              <br />
              Price: ${item.price / 100.0}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice / 100.0}</p>
      </div>
    );
  };
  
  export default Cart;
