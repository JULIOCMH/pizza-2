import { Link } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { ContextoGlobal } from "./context/ContextoGlobal";

const Navbar = () => {
  const { getTotal } = useContext(ContextoGlobal);
  const token = true;
  return (
    <div className="navbar">
      <div style={{ display: "flex" }}>
        <h2>Pizzeria Mamma Mia!</h2>
        <Link to="/" className="button">
          🍕Home
        </Link>
        {token ? (
          <>
            <Link to="/Login" className="button">
              🔐Login
            </Link>
            <Link to="/Register" className="button">
              🔐Register
            </Link>
            <Link to="/Profile" className="button">
              Profile
            </Link>
          </>
        ) : (
          <>
            <button>🔒Logout</button>
            <button>🔓Profile</button>
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
