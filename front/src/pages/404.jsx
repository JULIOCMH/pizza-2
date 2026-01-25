import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        color: "red",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Error 404</h1>
      <p>Página no encontrada</p>
      <Link to="/" className="button" style={{ background: "black" }}>
        Volver Al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
