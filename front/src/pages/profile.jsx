import "../App.css";
import { useContext, useEffect, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal";

const Profile = () => {
  const { setUser } = useContext(ContextoGlobal);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setProfile(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          setProfile(null);
          return;
        }
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Cargando perfil...</div>;
  }

  if (!profile) {
    return (
      <div style={{ textAlign: "center" }}>
        <p>No hay datos de perfil disponibles.</p>
        <button className="button" onClick={() => setUser(false)}>
          Cerrar Sesión
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "black" }}>{profile.name || profile.username || "Nombre de Usuario"}</h3>
      <p style={{ color: "black" }}>{profile.email}</p>
      <button className="button" onClick={() => setUser(false)}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
