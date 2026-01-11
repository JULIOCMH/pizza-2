import Header from "./assets/Header.jpg";

function header() {
  return (
    <div
      style={{
        backgroundImage: `url(${Header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>¡Pizzeria Mamma Mia!</h1>
    </div>
  );
}

export default header;
