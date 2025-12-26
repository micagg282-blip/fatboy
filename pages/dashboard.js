import { useEffect, useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedLevel = localStorage.getItem("level");

    if (storedName) setName(storedName);
    if (storedLevel) setLevel(Number(storedLevel));
  }, []);

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    localStorage.setItem("level", newLevel.toString());
  };

  return (
    <div className="container">
      <h1>Hola {name}</h1>

      <p>
        Soy Otto. Estás en el nivel <strong>{level}</strong>.
      </p>

      <p>
        Cada nivel te va a ayudar a entenderte mejor y avanzar.
      </p>

      <button className="button" onClick={nextLevel}>
        Completar nivel
      </button>

      <div className="otto">
        <p>
          {level === 1 && "Empezamos por conocerte."}
          {level === 2 && "Ahora vamos a profundizar."}
          {level === 3 && "Estás avanzando muy bien."}
          {level >= 4 && "Estás listo para el siguiente paso."}
        </p>
      </div>
    </div>
  );
}
