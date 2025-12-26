"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("fatboy_user");
    if (!user) {
      router.push("/login");
    } else {
      setName(user);
    }
  }, []);

  return (
    <main className="main">
      <h1>Hola {name}, soy Otto.</h1>

      <p className="intro">
        Estoy acá para acompañarte en tu camino laboral.
        Este espacio fue creado para ayudarte a crecer,
        comunicarte mejor y sentirte más seguro en tu trabajo.
      </p>

      <div className="card">
        <h2>Nivel 1 — Tomar conciencia</h2>
        <p>
          ¿Cómo te sentís hoy en tu trabajo?
          ¿Qué te motiva y qué te frena?
        </p>
      </div>

      <div className="card">
        <h2>Nivel 2 — Comunicación</h2>
        <p>
          Aprender a decir lo que pensás con respeto y claridad.
        </p>
      </div>

      <div className="card">
        <h2>Nivel 3 — Compromiso</h2>
        <p>
          Entender tu rol y cómo impacta en el equipo.
        </p>
      </div>

      <p className="footer">
        Este espacio es confidencial.  
        Otto está para ayudarte.
      </p>
    </main>
  );
}
