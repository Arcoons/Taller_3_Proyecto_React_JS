import './Login.css'
import persona from './Hotelia horizontal negro.svg' ;
import {Link} from 'react-router-dom';
function Login(){
    return(
    <section>
        <div id="logo">
            <a href=""><img src={persona} /></a>
        </div>
        <div class="login">
            <i class="fa-solid fa-user" />
            <form action="#">
                <div class="iniciosesion">
                    <label for="">Usuario</label>
                    <input type="text" />
                </div>
                <div class="iniciosesion">  
                    <label for="">Contraseña</label>
                    <input type="text" />
                </div>
                <button id="boton"><a href="Dashboard.html">Ingresar</a></button>
                <p>¿No tienes una cuenta?<Link to='/registro'>Regístrate aquí.</Link> </p>
            </form>
        </div>
        </section>
        
    );
}
export default Login;