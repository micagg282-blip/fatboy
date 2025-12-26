import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [iniciado, setIniciado] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#000",
        fontFamily: "Arial, sans-serif",
        padding: "60px 40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!iniciado ? (
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "42px" }}>Fatboy</h1>
          <h2 style={{ fontWeight: "400", marginBottom: "40px" }}>
            Espacio de acompañamiento laboral
          </h2>

          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Hola, soy Otto.
          </p>

          <p style={{ marginBottom: "20px" }}>
            ¿Cómo te llamás?
          </p>

          <input
            type="text"
            placeholder="Escribí tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "100%",
              marginBottom: "20px",
            }}
          />

          <button
            onClick={() => setIniciado(true)}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: "700px" }}>
          <h1>Hola {nombre} 👋</h1>

          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Soy Otto.  
            Estoy acá para acompañarte en tu camino laboral.
          </p>

          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Este espacio es personal, confidencial y a tu ritmo.
            No hay respuestas correctas, solo procesos.
          </p>

          <p style={{ marginTop: "30px" }}>
            Cuando estés lista, podemos empezar.
          </p>

          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Comenzar mi proceso
          </button>

          <p style={{ marginTop: "50px", fontStyle: "italic" }}>
            — Otto
          </p>
        </div>
      )}
    </main>
  );
}
