import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <Link style={estilos} to="/">Home</Link>
        <Link style={estilos} to="animations">Animations</Link>
        <Link style={estilos} to="sobre">Sobre</Link>
      </div>
    </>
  );
}

const estilos =  {
  marginLeft: "10px",
  textDecoration: "none",
}
