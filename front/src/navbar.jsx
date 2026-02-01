import { Link, NavLink } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { ContextoGlobal } from "./context/ContextoGlobal";

const Navbar = () => {
  const { getTotal, user, setUser } = useContext(ContextoGlobal);
  return (
    <div className="navbar">
      <div style={{ display: "flex" }}>
        <h2>Pizzeria Mamma Mia!</h2>
        <NavLink to="/" className="button"
        style={({isActive}) => ({color :isActive ? "red": "white"})}>
          🍕Home
        </NavLink>
        {user ? (
          <>
            <NavLink to="/Profile" className="button"
            style={({isActive}) => ({color :isActive ? "red": "white"})}>
              Profile
            </NavLink>
            <button className="button" onClick={() => setUser(false)}>🔒Logout</button>
          </>
        ) : (
          <>
          <NavLink to="/Login" className="button"
            style={({isActive}) => ({color :isActive ? "red": "white"})}>
              🔐Login
            </NavLink>
            <NavLink to="/Register" className="button"
            style={({isActive}) => ({color :isActive ? "red": "white"})}>
              🔐Register
            </NavLink>
          </>
        )}
      </div>
      <div>
        <Link to="/Cart" className="button">
          🛒 Total ${getTotal()}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
