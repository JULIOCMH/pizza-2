import { useContext, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [alerta, setAlerta] = useState("");
  const {setUser} = useContext(ContextoGlobal)

  const handleLogin = (e) => {
    e.preventDefault();
    setAlerta("");

    if (!usuario.trim() || !password.trim()) {
      setError(true);
      setAlerta("Todos los datos son obligatorios");
      return;
    }
    const stored = localStorage.getItem("registeredUser");
    if (!stored) {
      setError(true);
      setAlerta("No hay usuario registrado");
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(stored);
    } catch (err) {
      console.error("Error parseando usuario registrado", err);
      setError(true);
      setAlerta("Error con el usuario guardado");
      return;
    }

    if (
      parsed.usuario === usuario.trim() &&
      parsed.password === password.trim()
    ) {
      setError(false);
      setAlerta("Inicio Exitoso");
      setUsuario("");
      setPassword("");
      setUser(true)
    } else {
      setError(true);
      setAlerta("Usuario o contraseña incorrectos");
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
