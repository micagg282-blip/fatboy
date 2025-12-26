import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const n = localStorage.getItem("userName");
    const l = localStorage.getItem("level");
    if (n) setName(n);
    if (l) setLevel(Number(l));
  }, []);

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    localStorage.setItem("level", newLevel);
  };

  const messages = {
    1: `Hola ${name}, soy Otto. Voy a acompañarte en este proceso.`,
    2: "Este nivel es para entender qué querés mejorar.",
    3: "Ahora empezamos a trabajar en tus objetivos.",
    4: "Estás avanzando muy bien. Esto ya es crecimiento real.",
    5: "Nivel completo. Estás listo para el siguiente paso."
  };

  return (
    <div className="container">
      <h1>FATBOY</h1>

      <p className="subtitle">
        Plataforma de desarrollo personal y enfoque mental
      </p>

      <div className="card">
        <h2>👤 Hola {name}</h2>
        <p><strong>Nivel actual:</strong> {level}</p>

        <p className="otto">{messages[level]}</p>

        <button className="button" onClick={nextLevel}>
          Completar nivel
        </button>
      </div>
    </div>
  );
}
