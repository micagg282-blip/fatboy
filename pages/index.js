export default function Home() {
  return (
    <div className="container">
      <h1>Fatboy</h1>

      <p>
        Una experiencia diseñada para ayudarte a entenderte, mejorar y avanzar.
        No es una app más. Es un proceso.
      </p>

     <button
  className="button"
  onClick={() => window.location.href = "/login"}
>
  Comenzar
</button>
