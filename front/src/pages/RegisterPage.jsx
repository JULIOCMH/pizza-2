import { useState } from "react";

const RegisterPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState(false);
  const [alerta, setAlerta] = useState("");

  const validarRegister = async (e) => {
    e.preventDefault();
    setAlerta("");
    setError(false);

    if (!usuario.trim() || !password.trim() || !repassword.trim()) {
      setError(true);
      setAlerta("Todos los datos son obligatorios");
      return;
    }
    if (password.trim() !== repassword.trim()) {
      setError(true);
      setAlerta("Las contraseñas no coinciden");
      return;
    }
    if (password.trim().length < 6) {
      setError(true);
      setAlerta("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: usuario.trim(), password: password.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(true);
        setAlerta(data.error || data.message || "Error en el registro");
        return;
      }

      localStorage.setItem("token", data.token);
      setError(false);
      setAlerta("Registro Exitoso");
      setUsuario("");
      setPassword("");
      setRepassword("");
    } catch (err) {
      setError(true);
      setAlerta("Error conectando al servidor");
    }
  };

  return (
    <form onSubmit={validarRegister}>
      <div className="RegisterPage">
        {alerta &&
          (error ? (
            <p className="error">{alerta}</p>
          ) : (
            <p className="check">{alerta}</p>
          ))}
        <label style={{ fontWeight: "800" }}>Nombre Usuario</label>
        <input
          type="text"
          name="usuario"
          onChange={(e) => setUsuario(e.target.value)}
          value={usuario}
        />
        <label style={{ fontWeight: "800" }}>Contraseña</label>
        <input
          type="password"
          name="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label style={{ fontWeight: "800" }}>Repita Contraseña</label>
        <input
          type="password"
          name="RepitaContraseña"
          onChange={(e) => setRepassword(e.target.value)}
          value={repassword}
        />
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default RegisterPage;
