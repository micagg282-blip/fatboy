import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [paso, setPaso] = useState(1);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "50px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "650px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {paso === 1 && (
          <>
            <h1 style={{ marginBottom: "5px" }}>Fatboy</h1>
            <p style={{ marginBottom: "30px", color: "#555" }}>
              Espacio de acompañamiento laboral
            </p>

            <p>Hola, soy Otto.</p>
            <p>¿Cómo te llamás?</p>

            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribí tu nombre"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "10px",
                marginBottom: "25px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />

            <button
              onClick={() => setPaso(2)}
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "12px 25px",
                cursor: "pointer",
              }}
            >
              Entrar
            </button>
          </>
        )}

        {paso === 2 && (
          <>
            <h2>Hola {nombre}</h2>

            <p style={{ marginTop: "20px" }}>
              Tomate un momento para pensar cómo estás hoy en tu trabajo.
            </p>

            <textarea
              placeholder="¿Cómo te sentís actualmente?"
              style={textareaStyle}
            />
            <textarea
              placeholder="¿Qué te gustaría mejorar?"
              style={textareaStyle}
            />

            <button onClick={() => setPaso(3)} style={buttonStyle}>
              Continuar
            </button>
          </>
        )}

        {paso === 3 && (
          <>
            <h2>Comunicación y vínculos</h2>

            <textarea
              placeholder="¿Cómo es tu comunicación con el equipo?"
              style={textareaStyle}
            />
            <textarea
              placeholder="¿Sentís que sos escuchado/a?"
              style={textareaStyle}
            />

            <button onClick={() => setPaso(4)} style={buttonStyle}>
              Continuar
            </button>
          </>
        )}

        {paso === 4 && (
          <>
            <h2>Compromiso personal</h2>

            <textarea
              placeholder="¿Qué podrías hacer para mejorar tu día laboral?"
              style={textareaStyle}
            />
            <textarea
              placeholder="¿Qué compromiso personal asumís?"
              style={textareaStyle}
            />

            <p style={{ marginTop: "30px", fontStyle: "italic" }}>
              Gracias por tomarte este espacio.
              <br />— Otto
            </p>
          </>
        )}
      </div>
    </main>
  );
}

const textareaStyle = {
  width: "100%",
  height: "80px",
  marginTop: "15px",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  marginTop: "30px",
  background: "#000",
  color: "#fff",
  padding: "12px 25px",
  border: "none",
  cursor: "pointer",
};

