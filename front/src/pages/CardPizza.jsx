import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextoGlobal } from "../context/ContextoGlobal";

const CardPizza = ({ pizza }) => {
  const { increaseQuantity } = useContext(ContextoGlobal);
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/Pizza/${pizza.id}`)
  }

  return (
    <div
      className="cardbody"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "1rem",
        borderRadius: "10px",
        justifyContent: "space-between",
        minHeight: "100%",
      }}
    >
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3>{pizza.name}</h3>
      <p>
        <strong>Precio: ${pizza.price}</strong>
      </p>
      <p>{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button
        onClick={() => handleClick()}
        style={{ background: "black" }}
      >
        Ver Mas Informacion
      </button>
      <button
        onClick={() => increaseQuantity(pizza.id)}
        className="button"
        style={{ background: "black" }}
      >
        Agregar Al Carrito
      </button>
    </div>
  );
};

export default CardPizza;
