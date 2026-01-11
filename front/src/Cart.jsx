
import React, { useState } from 'react';
import { pizzas } from './pizzas.js';

const Cart = () => {
  const [pizzaCart, setPizzaCart] = useState(
    pizzas.map(pizza => ({ ...pizza, quantity: 1 }))
  );

  const increaseQuantity = (id) => {
    setPizzaCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setPizzaCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const getTotal = () => {
    return pizzaCart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '20px',
      textAlign: 'center',
      color: 'black',
    }}>
      <h2>Carrito de Compras</h2>
      <div>
        {pizzaCart.map(item => (
          <div key={item.id} style={{
            border: '1px solid #eee',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <img src={item.img} alt="" style={{width: '15%'}} />
            <div>
           
              <h4>{item.name}</h4>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => decreaseQuantity(item.id)} style={{ margin: '0 5px', padding: '5px 10px' }}>-</button>
              <button onClick={() => increaseQuantity(item.id)} style={{ margin: '0 5px', padding: '5px 10px' }}>+</button>
            </div>
          </div>
        ))}
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
};

export default Cart;
