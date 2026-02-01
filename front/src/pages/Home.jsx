import CardPizza from "./CardPizza";
import { useContext } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal";

const Home = () => {
  const { pizzas, loading, error} = useContext(ContextoGlobal);

  if (loading)
    return (
      <p style={{ textAlign: "center", padding: "20px", color:"red"}}>Cargando pizzas...</p>
    );
 if (error)
  return(
<p style={{ textAlign: "center", padding: "20px", color:"red"}}>No se pudieron cargar las Pizzas...</p>
)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        gap: "1rem",
      }}
    >
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
export default Home;
