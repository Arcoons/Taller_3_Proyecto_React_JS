import '../../pages/dasboard/dashboard.css'
import HoteliaBlanco from "./Hotelia horizontal blanco.svg";
import HoteliaCampana from "./hotelia campana.svg";
import FotoMobile from "./foto-mobile.png"
import { Link } from 'react-router-dom';

function Menu({persona,correo}){
    return(
        <section className="menuDashboard">
                  <div className="encabezado">
                        <div className="logoDash">
                            <img src={HoteliaBlanco} alt="hoteliablanco" class="desktop"/>
                            <img src={HoteliaCampana} alt="" class="mobileDash"/>
                        </div>

                        <div className="desc">
                              <div>
                                <img src={FotoMobile} alt="foto"/>
                                <h3>{persona}</h3>
                                <h4>{correo}</h4>
                              </div>
                        </div>         
                  </div>
                  <div className="opciones"> 
                        <div className="mrd">
                        <Link to="/ERROR" className="ho"><i className="fa-solid fa-bed" id="menu"></i><p>Habitaciones</p></Link>
                        <Link to="/ERROR"  className="ho"><i className="fa-solid fa-bell-concierge" id="menu"></i><p>Reservas</p></Link>
                        <Link to="/ERROR"  className="ho"><i className="fa-solid fa-bed" id="menu"></i><p>Habitaciones</p></Link>
                        <Link to="/ERROR" className="ho"><i className="fa-solid fa-bell-concierge" id="menu"></i><p>Reservas</p></Link>
                        </div>
                        
                        <div className="cerrar">
                              <Link to="/" className="ho"><i className="fa-solid fa-arrow-right-from-bracket" id="menu"></i><p>Cerrar Sesion</p></Link>
                        </div>
                  </div>              
        </section>
    );
}

export default Menu;