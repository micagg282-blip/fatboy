import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("fatboy_user");
    if (saved) {
      const data = JSON.parse(saved);
      setName(data.name);
      setGoal(data.goal);
      setLevel(data.level);
      setStep(4);
    }
  }, []);

  const saveData = (data) => {
    localStorage.setItem("fatboy_user", JSON.stringify(data));
  };

  const calculateLevel = (goal) => {
    if (goal.includes("primer")) return "Inicial";
    if (goal.includes("mejor")) return "Intermedio";
    return "Avanzado";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Progress step={step} />

        {step === 0 && (
          <>
            <h1 style={styles.title}>Fatboy</h1>
            <p style={styles.text}>Acompañamiento laboral inteligente.</p>
            <button style={styles.button} onClick={() => setStep(1)}>
              Empezar
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <p style={styles.text}>Hola, soy Otto 👋</p>
            <p style={styles.text}>¿Cómo te llamás?</p>
            <input
              style={styles.input}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
            <button
              style={styles.button}
              onClick={() => setStep(2)}
            >
              Continuar
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p style={styles.text}>Encantado, {name}.</p>
            <p style={styles.text}>¿Qué te gustaría lograr?</p>
            <input
              style={styles.input}
              placeholder="Ej: conseguir mi primer trabajo"
              onChange={(e) => setGoal(e.target.value)}
            />
            <button
              style={styles.button}
              onClick={() => {
                const lvl = calculateLevel(goal);
                setLevel(lvl);
                saveData({ name, goal, level: lvl });
                setStep(3);
              }}
            >
              Continuar
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <p style={styles.text}>Perfecto, {name}.</p>
            <p style={styles.text}>
              Detecté que tu nivel es:
            </p>
            <h2 style={styles.level}>{level}</h2>

            <button style={styles.button} onClick={() => setStep(4)}>
              Ver mi camino
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <p style={styles.text}>
              Este será tu recorrido personalizado:
            </p>

            <ul style={styles.list}>
              <li>✔ Diagnóstico laboral</li>
              <li>✔ Organización de objetivos</li>
              <li>✔ Desarrollo profesional</li>
              <li>✔ Seguimiento con Otto</li>
            </ul>

            <p style={styles.textSmall}>
              Cuando quieras, seguimos avanzando.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const Progress = ({ step }) => (
  <div style={styles.progress}>
    <div
      style={{
        ...styles.bar,
        width: `${(step / 4) * 100}%`,
      }}
    />
  </div>
);

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "#111",
    padding: "50px",
    borderRadius: "20px",
    maxWidth: "520px",
    width: "100%",
    color: "#fff",
    textAlign: "center",
  },

  title: {
    fontSize: "2.5rem",
  },

  text: {
    color: "#ccc",
    marginBottom: "1rem",
  },

  textSmall: {
    color: "#888",
    fontSize: "0.9rem",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    marginBottom: "1rem",
    background: "#1c1c1c",
    color: "#fff",
  },

  button: {
    padding: "14px 30px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },

  progress: {
    height: "6px",
    background: "#222",
    borderRadius: "10px",
    marginBottom: "30px",
  },

  bar: {
    height: "100%",
    background: "#fff",
    transition: "0.4s",
  },

  list: {
    textAlign: "left",
    color: "#ccc",
    lineHeight: "1.6",
  },

  level: {
    fontSize: "1.6rem",
    margin: "10px 0",
  },
};
