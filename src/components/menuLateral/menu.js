import "./menu.css"
import HoteliaBlanco from "./Hotelia horizontal blanco.svg";
import HoteliaCampana from "./Hotelia horizontal blanco.svg";
import FotoMobile from "./foto-mobile.png"

function Menu(){
    return(
        <section className="menuDashboard">
                  <div className="encabezado">
                        <div className="logo">
                            <img src={HoteliaBlanco} alt="hoteliablanco"/>
                            <img src={HoteliaCampana} alt="HoteliaCampana"/>
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
                              <a href="index.html" className="ho"><i className="fa-solid fa-arrow-right-from-bracket" id="menu"></i><p>Cerrar Sesion</p></a>
                        </div>
                  </div>              
        </section>
    );
}

export default Menu;