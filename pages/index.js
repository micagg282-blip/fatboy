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

          <p>
            Antes de avanzar, quiero que pienses un momento en vos dentro del
            trabajo.
          </p>

          <p>Respondé con sinceridad:</p>

          <textarea
            placeholder="¿Cómo te sentís hoy en tu trabajo?"
            style={{ width: "100%", height: "80px", marginTop: "10px" }}
          />

          <textarea
            placeholder="¿Sentís que podés expresarte con libertad?"
            style={{ width: "100%", height: "80px", marginTop: "20px" }}
          />

          <textarea
            placeholder="¿Qué te gustaría mejorar?"
            style={{ width: "100%", height: "80px", marginTop: "20px" }}
          />

          <button
            onClick={() => setPaso(3)}
            style={{
              marginTop: "30px",
              background: "#000",
              color: "#fff",
              padding: "12px 25px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Continuar
          </button>
        </div>
      )}

      {paso === 3 && (
        <div style={{ maxWidth: "700px" }}>
          <h2>Comunicación y vínculos</h2>

          <p style={{ marginTop: "20px" }}>
            Ahora pensemos en cómo te relacionás con las personas que te rodean.
          </p>

          <p>Respondé con calma:</p>

          <textarea
            placeholder="¿Cómo es tu comunicación con tus compañeros?"
            style={{ width: "100%", height: "80px", marginTop: "10px" }}
          />

          <textarea
            placeholder="¿Sentís que sos escuchado/a?"
            style={{ width: "100%", height: "80px", marginTop: "20px" }}
          />

          <textarea
            placeholder="¿Qué te gustaría cambiar en la forma de comunicarte?"
            style={{ width: "100%", height: "80px", marginTop: "20px" }}
          />

          <p style={{ marginTop: "30px" }}>
            Gracias por tomarte este espacio.
          </p>

          <p style={{ fontStyle: "italic", marginTop: "20px" }}>
            — Otto
          </p>
        </div>
      )}
    </main>
  );
}
