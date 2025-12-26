export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <h1>Fatboy</h1>
      <h2>Espacio de acompañamiento laboral</h2>

      <p style={{ maxWidth: "600px", marginTop: "20px" }}>
        Hola, estoy acá para ayudarte.
        <br /><br />
        Este espacio fue creado para acompañarte en tu camino laboral,
        fortalecer la comunicación, el compromiso y el trabajo en equipo.
      </p>

      <p style={{ marginTop: "30px", fontStyle: "italic" }}>
        — Otto
      </p>
    </main>
  );
}
