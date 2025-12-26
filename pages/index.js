export default function Home() {
  const nombre = "Micaela"; // después esto será automático

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, sans-serif",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Fatboy
      </h1>

      <h2 style={{ fontSize: "22px", fontWeight: "400", marginBottom: "40px" }}>
        Espacio de acompañamiento laboral
      </h2>

      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        Hola {nombre}, soy Otto.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
        Estoy acá para acompañarte en tu camino laboral.
        Este espacio fue creado para que puedas pensar, ordenar ideas
        y crecer con más claridad y tranquilidad.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
        No es una evaluación.  
        No es un control.  
        Es un espacio seguro, personal y a tu ritmo.
      </p>

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "40px" }}>
        Cuando quieras, podés empezar.
      </p>

      <button
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          padding: "15px 30px",
          fontSize: "16px",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        Comenzar
      </button>

      <p style={{ marginTop: "60px", fontStyle: "italic" }}>
        — Otto
      </p>
    </main>
  );
}
