import "./Inicio.css"
import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div className="inicio">
      <div className="sesion">
        <Link to="/dashboard">Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default Inicio;
