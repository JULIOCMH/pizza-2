function card(props) {
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
      <img className="imagen" src={props.imagen} style={{ width: "20rem" }} />
      <h3 style={{ borderBottom: "1px solid black", width: "100%" }}>
        {props.titulo}
      </h3>
      <p>Ingredientes:</p>
      <p>🍕 {props.ingredientes}</p>
      <span
        style={{
          borderBottom: "1px solid black",
          width: "100%",
          fontWeight: "800",
          fontSize: "20px",
        }}
      >
        Precio: ${props.precio}
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <button>ver mas</button>
        <button>añadir</button>
      </div>
    </div>
  );
}

export default card;
