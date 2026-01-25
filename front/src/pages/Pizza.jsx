import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContextoGlobal } from "../context/ContextoGlobal";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, increaseQuantity } = useContext(ContextoGlobal);

  const pizza = useMemo(() => {
    return pizzas.find((p) => p.id === id);
  }, [pizzas, id]);

  if (!pizza) {
    return (
      <p style={{ textAlign: "center", padding: "20px" }}>
        Pizza no encontrada
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        color: "black",
      }}
    >
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      <h1
        style={{
          textTransform: "capitalize",
          marginBottom: "10px",
          color: "black",
        }}
      >
        {pizza.name}
      </h1>

      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#ff6b6b",
          marginBottom: "20px",
        }}
      >
        Precio: ${pizza.price.toLocaleString()}
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#555",
        }}
      >
        {pizza.desc}
      </p>

      <h3 style={{ marginBottom: "10px" }}>Ingredientes:</h3>
      <ul style={{ listStyleType: "none", padding: "0", marginBottom: "20px" }}>
        {pizza.ingredients &&
          pizza.ingredients.map((ingredient, idx) => (
            <li
              key={idx}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee",
                textTransform: "capitalize",
              }}
            >
              ✓ {ingredient}
            </li>
          ))}
      </ul>

      <button
        onClick={() => increaseQuantity(pizza.id)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#671919",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
