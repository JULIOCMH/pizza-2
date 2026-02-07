import React, { useContext, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";

const Cart = () => {
  const { pizzaCart, getTotal, increaseQuantity, decreaseQuantity, user, setPizzaCart } =
    useContext(ContextoGlobal);

  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [message, setMessage] = useState(null);

  const handleCheckout = async () => {
    if (!pizzaCart || pizzaCart.length === 0) {
      setMessage("El carrito está vacío");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Debes iniciar sesión para completar la compra");
      return;
    }

    setLoadingCheckout(true);
    setMessage(null);
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: pizzaCart, total: getTotal() }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || data.message || "Error procesando el pago");
      } else {
        setMessage(data.message || "Compra realizada con éxito");
        setPizzaCart([]);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error conectando al servidor");
    } finally {
      setLoadingCheckout(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "20px",
        textAlign: "center",
        color: "black",
      }}
    >
      <h2>Carrito de Compras</h2>
      <div>
        {pizzaCart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={item.img} alt="" style={{ width: "15%" }} />
            <div>
              <h4>{item.name}</h4>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => decreaseQuantity(item.id)}
                style={{ margin: "0 5px", padding: "5px 10px" }}
              >
                -
              </button>
              <button
                onClick={() => increaseQuantity(item.id)}
                style={{ margin: "0 5px", padding: "5px 10px" }}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <h3>Total: ${getTotal()}</h3>
      </div>
      {user ? (
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleCheckout}
          disabled={loadingCheckout || pizzaCart.length === 0}
        >
          {loadingCheckout ? "Procesando..." : "Pagar"}
        </button>
      ) : (
        <button disabled style={{ backgroundColor: "silver" }}>
          Pagar
        </button>
      )}

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default Cart;
