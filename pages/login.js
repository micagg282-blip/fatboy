import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!name) return;
    localStorage.setItem("fatboy_user", name);
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <h1>Fatboy</h1>
      <p>Espacio de acompañamiento laboral</p>

      <input
        style={styles.input}
        placeholder="Escribí tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button style={styles.button} onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    color: "#fff",
    fontFamily: "sans-serif",
  },
  input: {
    padding: "12px",
    marginTop: "20px",
    fontSize: "16px",
    width: "250px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#fff",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },
};
