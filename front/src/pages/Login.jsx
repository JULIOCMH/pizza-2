import { useContext, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [alerta, setAlerta] = useState("");
  const {setUser} = useContext(ContextoGlobal)

  const handleLogin = async (e) => {
    e.preventDefault();
    setAlerta("");

    if (!usuario.trim() || !password.trim()) {
      setError(true);
      setAlerta("Todos los datos son obligatorios");
      return;
    }
    try {
      // 2. Aquí está el método POST hacia tu API
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST", // Especificamos que enviamos datos
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: usuario.trim(), 
          password: password.trim() 
        }),
      });

      const data = await response.json();
      if(!response.ok){
        setError(true);
      setAlerta(data.error || data.message || "Error al iniciar sesión");
      }

      localStorage.setItem("token", data.token); // Guardamos el token que nos da el server
      setError(false);
      setAlerta("Inicio Exitoso");
      setUser(true); // Actualizamos el contexto global
      
      // Limpiamos los campos
      setUsuario("");
      setPassword("");

   } catch (err) {
      // Por si el servidor está apagado o no hay internet
      setError(true);
      setAlerta("Error conectando al servidor");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        {alerta &&
          (error ? (
            <p className="error">{alerta}</p>
          ) : (
            <p className="check">{alerta}</p>
          ))}
        <label style={{ fontWeight: "800" }}>Nombre de Usuario</label>
        <input
          type="text"
          name="usuario"
          onChange={(e) => setUsuario(e.target.value)}
          value={usuario}
        />
        <label style={{ fontWeight: "800" }}>Contraseña</label>
        <input
          type="password"
          name="contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Iniciar</button>
      </div>
    </form>
  );
};

export default Login;
