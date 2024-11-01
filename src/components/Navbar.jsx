import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="servicios">Servicios</Link></li>
        <li><Link to="contacto">Contacto</Link></li>
        <li><Link to="acerca">Acerca de</Link></li>
        <li><Link to="/">Cerrar Sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

