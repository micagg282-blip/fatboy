export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      color: "#000000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "40px"
    }}>
      <div>
        <h1>Fatboy</h1>
        <p>Espacio de acompañamiento laboral</p>

        <hr style={{ margin: "30px 0" }} />

        <p><strong>Hola, estoy acá para ayudarte.</strong></p>
        <p>
          Este espacio fue creado para acompañarte en tu camino laboral,
          fortalecer la comunicación, el compromiso y el trabajo en equipo.
        </p>

        <p style={{ marginTop: "30px", fontStyle: "italic" }}>
          — Otto
        </p>
      </div>
    </div>
  );
}
