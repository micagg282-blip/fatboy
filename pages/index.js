import { useState } from "react";

const preguntas = [
  {
    texto: "Para empezar… ¿cómo te sentís hoy en tu trabajo?",
    placeholder: "Podés escribir lo que sientas",
  },
  {
    texto: "¿Qué es lo que más te cuesta en este momento?",
    placeholder: "Ej: estrés, motivación, comunicación…",
  },
  {
    texto: "¿Qué te gustaría que cambie o mejore?",
    placeholder: "No tiene que ser algo perfecto",
  },
  {
    texto: "¿Qué esperás encontrar en este espacio?",
    placeholder: "Estoy acá para acompañarte",
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");

  const handleNext = () => {
    if (!input) return;

    setAnswers([...answers, input]);
    setInput("");
    setStep(step + 1);
  };

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {step === 0 && (
          <>
            <h1 style={styles.title}>Hola 🌿</h1>
            <p style={styles.text}>
              Soy Otto. Estoy acá para acompañarte.
            </p>
            <button style={styles.button} onClick={() => setStep(1)}>
              Continuar
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
              Empezar
            </button>
          </>
        )}

        {step >= 2 && step < preguntas.length + 2 && (
          <>
            <h2 style={styles.title}>Hola {name} 🤍</h2>
            <p style={styles.text}>
              {preguntas[step - 2].texto}
            </p>
            <input
              style={styles.input}
              placeholder={preguntas[step - 2].placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button style={styles.button} onClick={handleNext}>
              Continuar
            </button>
          </>
        )}

        {step === preguntas.length + 2 && (
          <>
            <h2 style={styles.title}>Gracias por compartir 💛</h2>
            <p style={styles.text}>
              Lo que escribiste es importante.  
              Estoy acá para acompañarte paso a paso.
            </p>
            <p style={styles.text}>
              Cuando quieras, podemos seguir trabajando juntos.
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
    maxWidth: "480px",
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
