import "./App.css";

const Navbar = (props) => {
  const total = 25000;
  const token = (true)
  return (
    <div className="navbar">
      <div style={{ display: "flex" }}>
        <h2>Pizzeria Mamma Mia!</h2>
        <button>🍕Home</button>
        {token ? (
          <>
            <button>🔐Login</button>
            <button>🔐Register</button>
          </>
        ) : (
          <>
            <button>🔒Logout</button>
            <button>🔓Profile</button>
          </>
        )}
      </div>
      <div>
        <button>🛒 Total ${props.total}</button>
      </div>
    </div>
  );
};

export default Navbar;
