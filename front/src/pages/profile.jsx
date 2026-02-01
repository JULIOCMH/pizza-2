import { Link } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal";
const Profile = () => {
  const{setUser} = useContext(ContextoGlobal)
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
      <button className="button" onClick={() => setUser(false)}>
        Cerrar Sesion
      </button>
    </div>
  );
};
export default Profile;
