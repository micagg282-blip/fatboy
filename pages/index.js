"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  const next = () => setStep(step + 1);

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {step === 0 && (
          <>
            <h1 style={styles.title}>Hola, soy Otto 👋</h1>
            <p style={styles.text}>
              Estoy acá para acompañarte en tu camino laboral.
            </p>
            <button style={styles.button} onClick={next}>
              Continuar
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p style={styles.text}>
              Este espacio fue creado para ayudarte a ordenar ideas,
              fortalecer tu comunicación y avanzar con más seguridad.
            </p>
            <button style={styles.button} onClick={next}>
              Seguir
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p style={styles.text}>
              No estás sola. Vamos paso a paso, a tu ritmo.
            </p>
            <button style={styles.button} onClick={next}>
              Empezar
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={styles.title}>✨ Bienvenida a Fatboy</h2>
            <p style={styles.text}>
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
    maxWidth: "500px",
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
    marginBottom: "2rem",
    color: "#ccc",
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
