import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!name) return;
    localStorage.setItem("userName", name);
    localStorage.setItem("level", "1");
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <h1>Bienvenida</h1>
      <p>Decime tu nombre para comenzar</p>

      <input
        type="text"
        placeholder="Tu nombre..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginTop: "20px",
          width: "250px",
        }}
      />

      <button className="button" onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}
