import "../styles/globals.css";

export const metadata = {
  title: "Fatboy – Espacio de acompañamiento",
  description: "Espacio de crecimiento personal y laboral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
