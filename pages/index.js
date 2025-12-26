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
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "#111",
    color: "#fff",
    padding: "50px 40px",
    borderRadius: "20px",
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 0 60px rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: "1rem",
    fontWeight: "600",
    letterSpacing: "1px",
  },

  text: {
    fontSize: "1.1rem",
    marginBottom: "1.4rem",
    color: "#ccc",
    lineHeight: "1.6",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    marginBottom: "1.2rem",
    fontSize: "1rem",
    background: "#1c1c1c",
    color: "#fff",
    outline: "none",
  },

  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "14px 28px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
};
