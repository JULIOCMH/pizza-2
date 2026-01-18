import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  const total = 25000;
  const token = (true)
  return (
    <div className="navbar">
      <div style={{ display: "flex" }}>
        <h2>Pizzeria Mamma Mia!</h2>
        <Link to="/" className="button">🍕Home</Link>
        {token ? (
          <>
            <Link to="/Login" className="button">🔐Login</Link>
            <Link to="/Register" className="button">🔐Register</Link>
            <Link to="/Profile" className="button">Profile</Link>
          </>
        ) : (
          <>
            <button>🔒Logout</button>
            <button>🔓Profile</button>
          </>
        )}
      </div>
      <div>
        <Link to="/Cart" className="button">🛒 Total $</Link>
      </div>
    </div>
  );
};

export default Navbar;
