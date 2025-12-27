import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const n = localStorage.getItem("name");
    const l = localStorage.getItem("level");

    if (n) setSavedName(n);
    if (l) setLevel(Number(l));
  }, []);

  const start = () => {
    if (!name) return;
    localStorage.setItem("name", name);
    localStorage.setItem("level", 1);
    setSavedName(name);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    localStorage.setItem("level", newLevel);
  };

  const messages = {
    1: "Hola, soy Otto. Estoy acá para acompañarte.",
    2: "Este espacio es para ayudarte a crecer profesionalmente.",
    3: "Vamos a trabajar foco, confianza y dirección.",
    4: "Estás avanzando muy bien.",
    5: "Completaste el proceso inicial. Buen trabajo."
  };

  return (
    <div style={styles.container}>
      <h1>FATBOY</h1>
      <p style={{ color: "#aaa" }}>
        Acompañamiento laboral y crecimiento personal
      </p>

      {!savedName ? (
        <div style={styles.card}>
          <h2>Bienvenida</h2>
          <input
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <button onClick={start} style={styles.button}>
            Entrar
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h2>Hola {savedName}</h2>
          <p><b>Nivel {level}</b></p>
          <p style={{ fontStyle: "italic" }}>{messages[level]}</p>

          {level < 5 && (
            <button onClick={nextLevel} style={styles.button}>
              Completar nivel
            </button>
          )}

          {level >= 5 && <p>🎉 Proceso inicial completado</p>}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  card: {
    background: "#1a1a1a",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    marginTop: "20px"
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "10px"
  },
  button: {
    padding: "10px",
    width: "100%",
    fontWeight: "bold",
    cursor: "pointer"
  }
};
