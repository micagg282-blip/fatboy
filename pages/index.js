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

          <p style={{ marginTop: "20px" }}>
            Antes de avanzar, quiero hacerte algunas preguntas.
          </p>

          <p style={{ marginTop: "20px" }}>
            No tenés que responder perfecto.  
            Solo con sinceridad.
          </p>

          <div style={{ marginTop: "30px" }}>
            <p>1. ¿Cómo te sentís hoy en tu trabajo?</p>
            <textarea style={{ width: "100%", height: "80px" }} />

            <p style={{ marginTop: "20px" }}>
              2. ¿Sentís que podés expresarte con libertad?
            </p>
            <textarea style={{ width: "100%", height: "80px" }} />

            <p style={{ marginTop: "20px" }}>
              3. ¿Qué te gustaría mejorar de tu experiencia laboral?
            </p>
            <textarea style={{ width: "100%", height: "80px" }} />
          </div>

          <button
            style={{
              marginTop: "30px",
              background: "#000",
              color: "#fff",
              padding: "12px 25px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Guardar y continuar
          </button>

          <p style={{ marginTop: "40px", fontStyle: "italic" }}>
            — Otto
          </p>
        </div>
      )}
    </main>
  );
}
