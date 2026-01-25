import { Link } from "react-router-dom";
import "../App.css";

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "black" }}>Nombre de Usuario</h3>
      <p style={{ color: "black" }}>example@gmail.com</p>
      <Link to="/Login" className="button" style={{ background: "black" }}>
        Cerrar Sesion
      </Link>
    </div>
  );
};
export default Profile;
