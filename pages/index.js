import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {step === 0 && (
          <>
            <h1 style={styles.title}>Hola 👋</h1>
            <p style={styles.text}>
              Soy Otto. Estoy acá para acompañarte en tu camino laboral.
            </p>
            <button style={styles.button} onClick={() => setStep(1)}>
              Continuar
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p style={styles.text}>
              Antes de empezar, ¿cómo te llamás?
            </p>
            <input
              style={styles.input}
              placeholder="Escribí tu nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              style={styles.button}
              onClick={() => name && setStep(2)}
            >
              Seguir
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={styles.title}>Hola {name} 🌿</h2>
            <p style={styles.text}>
              Este espacio fue creado para acompañarte, ayudarte a ordenar ideas
              y avanzar con más claridad y confianza.
            </p>
            <button style={styles.button} onClick={() => setStep(3)}>
              Continuar
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={styles.title}>✨ Bienvenida a Fatboy</h2>
            <p style={styles.text}>
              Estoy acá para ayudarte.  
              Cuando quieras, decime en qué te gustaría trabajar hoy.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f0f0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "480px",
    width: "100%",
    boxShadow: "0 0 40px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    color: "#ccc",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  button: {
    background: "#ffffff",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
