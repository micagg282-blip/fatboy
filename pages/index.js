import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("fatboy_name");
    if (savedName) {
      setName(savedName);
      setStep(2);
    }
  }, []);

  const next = () => setStep(step + 1);

  const saveName = () => {
    if (!input) return;
    localStorage.setItem("fatboy_name", input);
    setName(input);
    next();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.progress}>
          <div
            style={{
              ...styles.progressBar,
              width: `${(step / 4) * 100}%`,
            }}
          />
        </div>

        {step === 0 && (
          <>
            <h1 style={styles.title}>Fatboy</h1>
            <p style={styles.text}>
              Espacio de acompañamiento laboral.
            </p>
            <button style={styles.button} onClick={next}>
              Comenzar
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p style={styles.text}>Hola, soy Otto.</p>
            <p style={styles.text}>
              Estoy acá para acompañarte y ayudarte a crecer.
            </p>
            <input
              style={styles.input}
              placeholder="¿Cómo te llamás?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button style={styles.button} onClick={saveName}>
              Continuar
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p style={styles.text}>Hola {name} 👋</p>
            <p style={styles.text}>
              A partir de ahora voy a acompañarte en tu camino laboral.
            </p>
            <button style={styles.button} onClick={next}>
              Seguir
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <p style={styles.text}>
              Vamos a trabajar sobre:
            </p>
            <ul style={styles.list}>
              <li>✔ Comunicación</li>
              <li>✔ Organización</li>
              <li>✔ Objetivos</li>
              <li>✔ Crecimiento profesional</li>
            </ul>
            <button style={styles.button} onClick={next}>
              Continuar
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <p style={styles.text}>
              Cuando quieras, empezamos.
            </p>
            <p style={styles.textSmall}>
              Este espacio es tuyo.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ================== ESTILOS ================== */

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },

  title: {
    fontSize: "2.3rem",
    marginBottom: "1rem",
  },

  text: {
    fontSize: "1.1rem",
    marginBottom: "1.3rem",
    color: "#ccc",
  },

  textSmall: {
    fontSize: "0.95rem",
    color: "#888",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    marginBottom: "1.2rem",
    background: "#1c1c1c",
    color: "#fff",
    fontSize: "1rem",
  },

  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "14px 30px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600",
  },

  progress: {
    height: "6px",
    background: "#222",
    borderRadius: "10px",
    marginBottom: "30px",
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    background: "#fff",
    transition: "0.4s",
  },

  list: {
    textAlign: "left",
    color: "#ccc",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
};
