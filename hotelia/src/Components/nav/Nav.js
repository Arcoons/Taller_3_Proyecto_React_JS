import logov from "./Hotelia horizontal blanco.svg";
import "./Nav.css";
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <div class="logo1">
                <img src={logov} alt="logo" />
                <i class="fa-solid fa-bars hamb"></i>
            </div>
            <div class="menu">
                <a to="/" className="item">Inicio</a>
                <Link to="/ERROR" className="item">Ubícanos</Link>
                <Link to="/ERROR" className="item">Opiniones</Link>
                <Link to="/login" class="item-0"><i class="fa-solid fa-user"></i> Iniciar Sesión</Link>            </div>
        </nav>
    );
}

export default Nav;

