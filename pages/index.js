import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");

  const levels = [
    {
      title: "Conocerte",
      question: "¿Cómo te sentís hoy en tu trabajo?",
    },
    {
      title: "Conciencia",
      question: "¿Qué es lo que más te está costando últimamente?",
    },
    {
      title: "Reflexión",
      question: "¿Qué te gustaría que mejore en tu día a día laboral?",
    },
    {
      title: "Compromiso",
      question: "¿Qué pequeño cambio podrías intentar esta semana?",
    },
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
              Este espacio fue creado para acompañarte, ayudarte a pensar
              y crecer dentro de tu trabajo.
            </p>
            <button style={styles.button} onClick={() => setStep(1)}>
              Comenzar
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p style={styles.text}>
              Hola, soy Otto 🤍 <br />
              Estoy acá para acompañarte.
            </p>
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

        {step >= 2 && step < levels.length + 2 && (
          <>
            <h2 style={styles.title}>
              Hola {name} 🤍
            </h2>
            <p style={styles.text}>
              {levels[step - 2].question}
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

        {step === levels.length + 2 && (
          <>
            <h2 style={styles.title}>Gracias 🤍</h2>
            <p style={styles.text}>
              Lo que escribiste es importante.
            </p>
            <p style={styles.text}>
              Este espacio está pensado para acompañarte,
              sin juicios y a tu ritmo.
            </p>
            <p style={styles.text}>
              Podés volver cuando lo necesites.
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
