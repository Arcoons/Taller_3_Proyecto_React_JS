import logov from "./Hotelia horizontal blanco.svg";
import "./Nav.css";
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav id="nav">
        <div className="logo">
           <img src={logov} alt="Logo Hotelia"/>
        </div>
        <div class="menu">
                <a href="index.html" class="item">Inicio</a>
                <a href="ubicacion.html" class="item">Ubícanos</a>
                <a href="opiniones.html" class="item">Opiniones</a>
                
                <Link to="/login" class="item-0"><i class="fa-solid fa-user"></i> Iniciar Sesión</Link>
        </div>
    </nav>
    );
}

export default Nav;