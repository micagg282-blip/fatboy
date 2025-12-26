import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");

  const preguntas = [
    "¿Cómo te sentís hoy en tu trabajo?",
    "¿Qué es lo que más te cuesta en este momento?",
    "¿Qué te gustaría que mejore en tu día a día laboral?",
    "¿Qué esperás encontrar en este espacio?",
  ];

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {step === 0 && (
          <>
            <h1 style={styles.title}>Fatboy</h1>
            <p style={styles.text}>
              Espacio de acompañamiento laboral
            </p>
            <p style={styles.text}>
              Hola, soy Otto. Estoy acá para ayudarte 🤍
            </p>
            <button style={styles.button} onClick={() => setStep(1)}>
              Empezar
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p style={styles.text}>¿Cómo te llamás?</p>
            <input
              style={styles.input}
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              style={styles.button}
              onClick={() => name && setStep(2)}
            >
              Continuar
            </button>
          </>
        )}

        {step >= 2 && step < preguntas.length + 2 && (
          <>
            <h2 style={styles.title}>Hola {name} 🤍</h2>
            <p style={styles.text}>
              {preguntas[step - 2]}
            </p>
            <input
              style={styles.input}
              placeholder="Podés escribir con libertad"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              style={styles.button}
              onClick={() => {
                setAnswer("");
                setStep(step + 1);
              }}
            >
              Continuar
            </button>
          </>
        )}

        {step === preguntas.length + 2 && (
          <>
            <h2 style={styles.title}>Gracias por compartir 🤍</h2>
            <p style={styles.text}>
              Lo que escribiste es importante.
            </p>
            <p style={styles.text}>
              Este espacio está pensado para acompañarte, sin juicios.
            </p>
            <p style={styles.text}>
              Cuando quieras, podemos seguir.
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
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.1rem",
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
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
