import { createContext, useState, useEffect } from "react";

export const ContextoGlobal = createContext();

const ContextoGlobalProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaCart, setPizzaCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setPizzas(data);
        setPizzaCart([]);
      } catch (err) {
        console.error("Error cargando pizzas:", err);
        setError([])
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  const getTotal = () => {
    return pizzaCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const increaseQuantity = (id) => {
    setPizzaCart((prevCart) => {
      const pizzaEnCarrito = prevCart.find((p) => p.id === id);
      if (pizzaEnCarrito) {
        return prevCart.map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza,
        );
      } else {
        const pizzaAgregar = pizzas.find((p) => p.id === id);
        if (pizzaAgregar) {
          return [...prevCart, { ...pizzaAgregar, quantity: 1 }];
        }
        return prevCart;
      }
    });
  };

  const decreaseQuantity = (id) => {
    setPizzaCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza,
        )
        .filter((pizza) => pizza.quantity > 0),
    );
  };

  return (
    <ContextoGlobal.Provider
      value={{
        pizzas,
        pizzaCart,
        setPizzaCart,
        getTotal,
        increaseQuantity,
        decreaseQuantity,
        loading,
        error,
        user,
        setUser,
      }}
    >
      {children}
    </ContextoGlobal.Provider>
  );
};

export default ContextoGlobalProvider;
