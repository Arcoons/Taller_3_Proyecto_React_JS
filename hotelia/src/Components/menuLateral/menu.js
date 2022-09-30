import '../../pages/dasboard/dashboard.css'
import HoteliaBlanco from "./Hotelia horizontal blanco.svg";
import HoteliaCampana from "./hotelia campana.svg";
import FotoMobile from "./foto-mobile.png"
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <section className="menuDashboard">
                  <div className="encabezado">
                        <div className="logo">
                            <img src={HoteliaBlanco} alt="hoteliablanco" class="desktop"/>
                            <img src={HoteliaCampana} alt="" class="mobile"/>
                        </div>

                        <div className="desc">
                              <div>
                                <img src={FotoMobile} alt="foto"/>
                                <h3>Angie Vargas</h3>
                                <h4>angie@gmail.com</h4>
                              </div>
                        </div>         
                  </div>
                  <div className="opciones"> 
                        <div className="mrd">
                        <a href="/listaHabi.html" className="ho"><i className="fa-solid fa-bed" id="menu"></i><p>Habitaciones</p></a>
                        <a href="#" className="ho"><i className="fa-solid fa-bell-concierge" id="menu"></i><p>Reservas</p></a>
                        <a href="/listaHabi.html" className="ho"><i className="fa-solid fa-bed" id="menu"></i><p>Habitaciones</p></a>
                        <a href="#" className="ho"><i className="fa-solid fa-bell-concierge" id="menu"></i><p>Reservas</p></a>
                        </div>
                        
                        <div className="cerrar">
                              <Link to="/" className="ho"><i className="fa-solid fa-arrow-right-from-bracket" id="menu"></i><p>Cerrar Sesion</p></Link>
                        </div>
                  </div>              
        </section>
    );
}

export default Menu;