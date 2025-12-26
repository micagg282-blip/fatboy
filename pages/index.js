import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [paso, setPaso] = useState(1);

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
      {paso === 1 && (
        <div style={{ maxWidth: "500px" }}>
          <h1>Fatboy</h1>
          <h2>Espacio de acompañamiento laboral</h2>

          <p>Hola, soy Otto.</p>
          <p>¿Cómo te llamás?</p>

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
          />

          <button
            onClick={() => setPaso(2)}
            style={{
              background: "#000",
              color: "#fff",
              padding: "12px 25px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </div>
      )}

      {paso === 2 && (
        <div style={{ maxWidth: "700px" }}>
          <h2>Hola {nombre}</h2>

          <p>Tomate un momento para pensar cómo estás hoy en tu trabajo.</p>

          <textarea placeholder="¿Cómo te sentís actualmente?" style={{ width: "100%", height: "80px", marginTop: "15px" }} />
          <textarea placeholder="¿Qué te gustaría mejorar?" style={{ width: "100%", height: "80px", marginTop: "15px" }} />

          <button
            onClick={() => setPaso(3)}
            style={{ marginTop: "30px", background: "#000", color: "#fff", padding: "12px 25px", border: "none" }}
          >
            Continuar
          </button>
        </div>
      )}

      {paso === 3 && (
        <div style={{ maxWidth: "700px" }}>
          <h2>Comunicación y vínculos</h2>

          <textarea placeholder="¿Cómo te comunicás con tu equipo?" style={{ width: "100%", height: "80px", marginTop: "15px" }} />
          <textarea placeholder="¿Sentís que sos escuchado/a?" style={{ width: "100%", height: "80px", marginTop: "15px" }} />

          <button
            onClick={() => setPaso(4)}
            style={{ marginTop: "30px", background: "#000", color: "#fff", padding: "12px 25px", border: "none" }}
          >
            Continuar
          </button>
        </div>
      )}

      {paso === 4 && (
        <div style={{ maxWidth: "700px" }}>
          <h2>Compromiso personal</h2>

          <p>
            Este es un momento importante.  
            No se trata de exigirte, sino de elegir conscientemente.
          </p>

          <textarea
            placeholder="¿Qué podrías hacer vos para mejorar tu día a día laboral?"
            style={{ width: "100%", height: "80px", marginTop: "15px" }}
          />

          <textarea
            placeholder="¿Qué compromiso personal podés asumir?"
            style={{ width: "100%", height: "80px", marginTop: "15px" }}
          />

          <p style={{ marginTop: "30px" }}>
            Gracias por tomarte este tiempo.
          </p>

          <p style={{ fontStyle: "italic", marginTop: "20px" }}>
            — Otto
          </p>
        </div>
      )}
    </main>
  );
}
